-- Filter Pandoc untuk export-buku.mjs:
-- * callout VitePress (::: info/tip/warning) → #callout() di Typst
-- * id heading mengikuti slug VitePress, diberi awalan id halaman
-- * tautan antarhalaman (/menu/halaman#anchor) → tautan internal di dalam buku;
--   tautan ke halaman yang tidak ikut dicetak menjadi teks biasa

local stringify = pandoc.utils.stringify

-- Sama dengan slugify VitePress (@mdit-vue/shared), cukup untuk teks Indonesia.
local special = "[%s~`!@#%$%%%^&%*%(%)%-_%+=%[%]{}|\\;:\"'<>,%.%?/]"
local function slug(text)
  local s = text
  for _, q in ipairs({ "“", "”", "‘", "’" }) do s = s:gsub(q, "-") end
  s = s:gsub(special, "-"):gsub("%-%-+", "-")
  s = s:gsub("^%-+", ""):gsub("%-+$", ""):gsub("^(%d)", "_%1")
  return s:lower()
end

local function id_halaman(link)
  return "hal" .. link:gsub("[^%w]+", "-"):gsub("%-$", "")
end

local function typst_string(s)
  return '"' .. s:gsub("\\", "\\\\"):gsub('"', '\\"') .. '"'
end

local known = {}

local function beri_id(div)
  local halaman = id_halaman(div.attributes["data-link"])
  local seen = {}
  return div:walk({
    Header = function(h)
      if h.level == 2 then
        known[h.identifier] = true
        return nil
      end
      local base = slug(stringify(h.content))
      local s = base
      if seen[base] then s = base .. "-" .. seen[base] end
      seen[base] = (seen[base] or 0) + 1
      h.identifier = halaman .. "--" .. s
      known[h.identifier] = true
      return h
    end,
  })
end

local function ubah_tautan(link, halaman_ini)
  local t = link.target
  if not t:match("^[/#]") then return nil end
  local path, anchor = t:match("^([^#]*)#?(.*)$")
  path = path:gsub("%.html$", ""):gsub("%.md$", "")
  local hal = path == "" and halaman_ini or id_halaman(path)
  if anchor ~= "" and known[hal .. "--" .. anchor] then
    link.target = "#" .. hal .. "--" .. anchor
  elseif known[hal] then
    link.target = "#" .. hal
  else
    return link.content
  end
  return link
end

local function callout(div)
  local jenis
  for _, c in ipairs({ "info", "tip", "warning", "danger", "details" }) do
    if div.classes:includes(c) then jenis = c end
  end
  local judul = div.attributes.title
  local buka = "#callout(" .. typst_string(jenis)
  if judul then buka = buka .. ", judul: " .. typst_string(judul) end
  local blocks = { pandoc.RawBlock("typst", buka .. ")[") }
  for _, b in ipairs(div.content) do table.insert(blocks, b) end
  table.insert(blocks, pandoc.RawBlock("typst", "]"))
  return blocks
end

function Pandoc(doc)
  -- Tahap 1: id heading per halaman (harus selesai sebelum tautan diubah).
  doc = doc:walk({
    Div = function(div)
      if div.classes:includes("halaman") then return beri_id(div) end
    end,
  })
  -- Tahap 2: tautan dan callout, lalu buang pembungkus halaman.
  doc = doc:walk({
    Div = function(div)
      if not div.classes:includes("halaman") then return nil end
      local hal = id_halaman(div.attributes["data-link"])
      return div:walk({ Link = function(l) return ubah_tautan(l, hal) end })
    end,
  })
  return doc:walk({
    Div = function(div)
      if div.classes:includes("callout") then return callout(div) end
      if div.classes:includes("halaman") then return div.content end
    end,
  })
end
