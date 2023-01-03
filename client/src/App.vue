<template>
  <div class="container">
    <PostCreate></PostCreate>
  </div>
  <hr />
  <div class="container">
    <PostList></PostList>
  </div>
</template>

<script setup>
import PostCreate from "./components/PostCreate.vue";
import PostList from "./components/PostList.vue";
</script>

<style scoped></style>
