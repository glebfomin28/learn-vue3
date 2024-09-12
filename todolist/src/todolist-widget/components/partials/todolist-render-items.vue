<script setup lang="ts">
import { defineProps, toRefs } from "vue";
import { TodoType } from "../../domain/todolist.domain";
import TodolistItem from "./todolist-item.vue";

const props = defineProps<{
  todos: TodoType[];
  toggleTodo: (todoId: string) => void;
  deleteTodo: (todoId: string) => void;
}>();

const { todos } = toRefs(props);
</script>

<template>
  <div v-if="!todos?.length">Empty... Add a new task!</div>
  <ul class="todo-list">
    <TodolistItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @toggleTodo="toggleTodo"
      @deleteTodo="deleteTodo"
    />
  </ul>
</template>

<style scoped></style>
