<template>
  <div class="container">
    <!-- On récupère l'event de PostCreate et on lui dit d'activer la fonction createPost -->
    <PostCreate @submitPost="createPost"></PostCreate>
  </div>
  <hr />
  <div class="container">
    <h1>Post</h1>
    <!-- On récupère la donnée depuis PostList et on dit qu'elle vaut state.post -->
    <PostList :post="state.posts"></PostList>
  </div>
</template>

<script setup>
import PostCreate from "./components/PostCreate.vue";
import PostList from "./components/PostList.vue";
import axios from "axios";
import { reactive, onMounted } from "vue";

//GESTION DE LA CREATION
// On créer un post qu'on envoie au back puis qu'on récupère ensuite avec fetchPost
async function createPost(title) {
  await axios.post("http://localhost:4001/posts", {
    title: title,
  });
  await fetchPost();
}

// GESTION DE L'AFFICHAGE DE POST

//On monte les données récupérées par axios pour qu'elles deviennent visibles
onMounted(() => {
  fetchPost();
});

// On stocke la donnée sous forme d'objet
const state = reactive({
  posts: {},
});

//On récupere les données du back
async function fetchPost() {
  const response = await axios.get("http://localhost:4001/posts");
  state.posts = response.data;
}
</script>

<style scoped></style>
