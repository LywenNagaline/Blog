<template>
  <div>
    <ul>
      <li v-for="comment in comments" :key="comment.id">
        {{ comment.content }}
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  comments: Array,
});
</script>

<style scoped></style>
