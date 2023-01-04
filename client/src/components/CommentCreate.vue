<template>
  <div class="CommentCreate">
    <div>
      <form @submit="sendComment">
        <div className="form-group">
          <label>New Comment</label>
          <input v-model="newComment" className="form-control" />
        </div>
        <button className="btn btn-primary" required>Submit</button>
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
