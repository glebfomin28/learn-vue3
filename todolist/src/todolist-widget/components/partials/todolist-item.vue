<script setup lang="ts">
import { defineProps, toRefs, defineEmits } from "vue";
import { TodoType } from "../../domain/todolist.domain";

const props = defineProps<{
  todo: TodoType;
}>();

const { todo } = toRefs(props);

const emit = defineEmits<{
  (e: "toggleTodo", id: string): void;
  (e: "deleteTodo", id: string): void;
}>();

const onToggleTodo = () => {
  emit("toggleTodo", todo.value.id);
};

const onDeleteTodo = () => {
  emit("deleteTodo", todo.value.id);
};
</script>

<template>
  <li
    class="todo-item"
    :class="{ 'todo-item--done': todo.isCompleted }"
    @click="onToggleTodo"
  >
    <div class="todo-item__status">
      <i class="bi bi-check2"></i>
    </div>
    <span class="todo-item__text">{{ todo.text }}</span>
    <button class="todo-item__remove-button" @click.stop="onDeleteTodo">
      <i class="bi bi-trash3"></i>
    </button>
  </li>
</template>

<style scoped></style>
