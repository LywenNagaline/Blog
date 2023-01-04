<template>
  <div class="d-flex flex-row flex-wrap justify-content-between">
    <div class="card" v-for="post in sortedPosts" :key="post.id">
      <div class="card-body">
        <h3>{{ post.title }}</h3>
        <CommentList :postId="post.id"></CommentList>
        <CommentCreate :postId="post.id"></CommentCreate>
      </div>
    </div>
  </div>
</template>

<script setup>
// import axios from "axios";
import { computed } from "vue";
import CommentCreate from "./CommentCreate.vue";
import CommentList from "./CommentList.vue";

// onMounted(() => {
//   fetchPost();
// });

// const state = reactive({
//   posts: {},
// });

// async function fetchPost() {
//   const response = await axios.get("http://localhost:4001/posts");
//   console.log("fetchPost", response.data);
//   state.posts = response.data;
// }

const propsPost = defineProps({
  post: Object,
});

const sortedPosts = computed(() => {
  const transformedPosts = [];
  for (const post of Object.values(propsPost.post)) {
    transformedPosts.push(post);
  }
  return transformedPosts;
});
</script>

<style></style>
