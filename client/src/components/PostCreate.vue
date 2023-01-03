<template>
  <div class="PostCreate">
    <h1>Create Post</h1>
    <div>
      <form>
        <div class="form-group">
          <label>{{ title || "Titre" }}</label>
          <input
            class="form-control"
            v-model="title"
            placeholder="Ecrire le titre"
          />
        </div>
        <button class="btn btn-primary" @click="sendPost">Submit</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
// import { reactive } from "vue";
import axios from "axios";

const title = ref("");

async function sendPost(event) {
  event.preventDefault();
  const response = await axios.post("http://localhost:4001/posts", {
    title: title,
  });
  console.log(response);
}
</script>

<style scoped></style>
