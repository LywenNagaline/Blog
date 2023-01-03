<template>
  <div>
    <h1>Post</h1>
    <span>{{ post }}</span>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, reactive } from "vue";

onMounted(() => {
  fetchPost();
});

const post = reactive({});

async function fetchPost() {
  const response = await axios.get("http://localhost:4001/posts");
  console.log(response.data);
  post.value = response.data;
}
</script>

<style></style>
