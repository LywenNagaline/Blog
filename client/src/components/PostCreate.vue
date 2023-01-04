<template>
  <div class="PostCreate">
    <h1>Create Post</h1>
    <div>
      <form @submit="sendPost">
        <div class="form-group">
          <label>{{ title || "Titre" }}</label>
          <input
            class="form-control"
            required="required"
            type="text"
            v-model="title"
            placeholder="Ecrire le titre"
          />
        </div>
        <button class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const title = ref("");

// On créer un event qui va envoyer la valeur du titre lors du click sur le submit. Il sera récupéré dans APP
const emit = defineEmits(["submitPost"]);

async function sendPost(event) {
  //On empêche le reload de la page sinon la requête axios ne pourra pas se faire
  event.preventDefault();
  emit("submitPost", title.value);
  title.value = "";
}
</script>

<style scoped></style>
