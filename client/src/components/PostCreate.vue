<script setup></script>

<template>
  <div class="createPost">Create Post</div>
  <div>
    <form action="" method="post">
      <label for="titre">Titre: </label>
      <input type="text" name="titre" id="titre" required />
      <input type="submit" value="Envoyer" />
    </form>
  </div>
</template>

<style scoped>
.createPost {
  color: red;
}
</style>
