<template>
  <div class="d-flex flex-row flex-wrap justify-content-between">
    <PostCard
      v-for="post of sortedPosts"
      :key="post.id"
      :currentPost="post"
    ></PostCard>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, reactive, computed } from "vue";
import PostCard from "./PostCard.vue";

const state = reactive({
  posts: {},
});

async function fetchPosts() {
  const response = await axios.get("http://localhost:4001/posts");
  state.posts = response.data;
}

const sortedPosts = computed(() => {
  const transformedPosts = [];
  for (const post of Object.values(state.posts)) {
    transformedPosts.push(post);
  }
  return transformedPosts;
});

onMounted(() => {
  fetchPosts();
});
</script>
