<script lang="ts" setup>
import TodolistHeader from "./partials/todolist-header.vue";
import TodolistFilters from "./partials/todolist-filters.vue";
import TodolistForm from "./partials/todolist-form.vue";
import TodolistFooter from "./partials/todolist-footer.vue";
import TodolistRenderItems from "./partials/todolist-render-items.vue";
import { useTodolistControl } from "../hooks/use-todolist-control";

const {
  currentFilter,
  filteredTodos,
  activeTodosCount,
  doneTodosCount,
  setCurrentFilter,
  toggleTodo,
  deleteTodo,
  addTodo,
} = useTodolistControl();
</script>

<template>
  <div id="app">
    <TodolistHeader />
    <TodolistFilters
      :currentFilter="currentFilter"
      @setCurrentFilter="setCurrentFilter"
    />
    <main class="app-main">
      <TodolistRenderItems
        :todos="filteredTodos"
        :toggleTodo="toggleTodo"
        :deleteTodo="deleteTodo"
      />
      <TodolistForm @addTodo="addTodo" />
    </main>
    <TodolistFooter
      :activeTodosCount="activeTodosCount"
      :doneTodosCount="doneTodosCount"
    />
  </div>
</template>

<style></style>
