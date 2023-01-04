<template>
  <div class="CommentCreate">
    <div>
      <form @submit="sendComment">
        <div className="form-group">
          <label>New Comment</label>
          <input
            v-model="newComment"
            className="form-control"
            required="required"
            placeholder="Ecrire le commentaire"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const newComment = ref("");

const props = defineProps({
  postId: String,
});

async function sendComment(event) {
  //On empêche le reload de la page sinon la requête axios ne pourra pas se faire
  event.preventDefault();
  const response = await axios.post(
    `http://localhost:4001/posts/${props.postId}/comments`,
    {
      content: newComment.value,
    }
  );
  console.log("sendComment", response.data);
  newComment.value = "";
}
</script>

<style scoped></style>
