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
// import axios from "axios";
import axios from "axios";
import { onMounted, reactive, computed } from "vue";
import PostCard from "./PostCard.vue";

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

const state = reactive({
  posts: {},
});

async function fetchPosts() {
  const response = await axios.get("http://localhost:4001/posts");
  state.posts = response.data;
}

onMounted(() => {
  fetchPosts();
});
</script>

<style></style>
