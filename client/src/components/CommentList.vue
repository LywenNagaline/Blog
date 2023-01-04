<template>
  <div>
    <ul>
      <li v-for="comment in sortedComments" :key="comment.id">
        {{ comment.content }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { reactive, onMounted, computed } from "vue";
import axios from "axios";

onMounted(() => {
  fetchComments();
});

const state = reactive({
  comments: {},
});

const props = defineProps({
  postId: String,
});

async function fetchComments() {
  const response = await axios.get(
    `http://localhost:4001/posts/${props.postId}/comments`
  );
  console.log("fetchComments", response.data);
  state.comments = response.data;
}

const sortedComments = computed(() => {
  const transformedComments = [];
  for (const comment of Object.values(state.comments)) {
    transformedComments.push(comment);
  }
  return transformedComments;
});
</script>

<style scoped></style>
