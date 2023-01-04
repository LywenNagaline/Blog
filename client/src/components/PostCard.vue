<template>
  <div class="card">
    <div class="card-body">
      <h3>{{ currentPost.title }}</h3>
      <!-- On transmets les props aux vues des comments pour qu'ils puissent avoir l'id des posts auquel se rattacher-->
      <CommentList :postId="currentPost.id"></CommentList>
      <CommentCreate :postId="currentPost.id"></CommentCreate>
    </div>
  </div>
</template>

<script setup>
import CommentCreate from "./CommentCreate.vue";
import CommentList from "./CommentList.vue";

//Creation de la props pour transmettre les données du post à PostList
defineProps({
  currentPost: Object,
});
</script>

<style></style>
