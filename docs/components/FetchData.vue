<template>
  <div>
    <h2>API Data</h2>
    <pre v-if="data">{{ data }}</pre>
    <p v-else>Loading...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const data = ref(null);

onMounted(async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  data.value = await response.json();
});
</script>
