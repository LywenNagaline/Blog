<template>
  <div class="container">
    <PostCreate @submitPost="createPost"></PostCreate>
  </div>
  <hr />
  <div class="container">
    <h1>Post</h1>
    <PostList :post="state.posts"></PostList>
  </div>
</template>

<script setup>
import PostCreate from "./components/PostCreate.vue";
import PostList from "./components/PostList.vue";
import axios from "axios";
import { reactive, onMounted } from "vue";

//GESTION DE LA CREATION
async function createPost(title) {
  console.log(title);
  await axios.post("http://localhost:4001/posts", {
    title: title,
  });
  await fetchPost();
}

// GESTION DE L'AFFICHAGE DE POST
onMounted(() => {
  fetchPost();
});

const state = reactive({
  posts: {},
});

async function fetchPost() {
  const response = await axios.get("http://localhost:4001/posts");
  state.posts = response.data;
}
</script>

<style scoped></style>
