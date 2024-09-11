<script setup lang="ts">
import { defineProps, toRefs } from "vue";

const props = defineProps<{
  doneTodosCount: number;
  activeTodosCount: number;
}>();

const { doneTodosCount, activeTodosCount } = toRefs(props);
</script>

<template>
  <footer class="app-footer">
    {{ activeTodosCount }} more to do, {{ doneTodosCount }} done
  </footer>
</template>

<style scoped></style>
