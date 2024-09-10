<script setup>
defineProps({
  title: String,
  content: Number
});
</script>

<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <div>{{ content }}</div>
    <!--    <div>{{ // card?.id }}</div>-->
  </div>
</template>

<style scoped>
.card {
  padding: 10px;
  background: #a2a6f8;
}
</style>
