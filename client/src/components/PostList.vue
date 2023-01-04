<template>
  <div class="d-flex flex-row flex-wrap justify-content-between">
    <div class="card" v-for="post in sortedPosts" :key="post.id">
      <div class="card-body">
        <h3>{{ post.title }}</h3>
        <!-- On trnasmets les props aux vues des comments pour qu'ils puissent avoir l'id des posts auquel se rattacher-->
        <CommentList :postId="post.id"></CommentList>
        <CommentCreate :postId="post.id"></CommentCreate>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import CommentCreate from "./CommentCreate.vue";
import CommentList from "./CommentList.vue";

//On transmet la données à APP
const propsPost = defineProps({
  post: Object,
});

//On transforme les objets d'objets en tableau d'objets
const sortedPosts = computed(() => {
  const transformedPosts = [];
  for (const post of Object.values(propsPost.post)) {
    transformedPosts.push(post);
  }
  return transformedPosts;
});
</script>

<style></style>
