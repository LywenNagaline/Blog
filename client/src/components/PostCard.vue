<template>
  <div class="card">
    <div class="card-body">
      <h3>{{ props.currentPost.title }}</h3>
      <!-- On transmets les props aux vues des comments pour qu'ils puissent avoir l'id des posts auquel se rattacher-->
      <CommentList :comments="state.comments"></CommentList>
      <CommentCreate
        @createComment="sendCommentToBackEnd"
        :postId="props.currentPost.id"
      ></CommentCreate>
    </div>
  </div>
</template>

<script setup>
import CommentCreate from "./CommentCreate.vue";
import CommentList from "./CommentList.vue";
import axios from "axios";
import { onMounted, reactive } from "vue";

//Creation de la props pour transmettre les données du post à PostList
const props = defineProps({
  currentPost: Object,
});

async function sendCommentToBackEnd(comment) {
  await axios.post(
    `http://localhost:4001/posts/${props.currentPost.id}/comments`,
    {
      content: comment,
    }
  );
  await fetchComments();
}

//GESTION DE L'AFFICHAGE
onMounted(() => {
  fetchComments();
});

const state = reactive({
  comments: [],
});

async function fetchComments() {
  const response = await axios.get(
    `http://localhost:4001/posts/${props.currentPost.id}/comments`
  );
  console.log("fetchComments", response.data);
  state.comments = response.data;
}
</script>

<style></style>
