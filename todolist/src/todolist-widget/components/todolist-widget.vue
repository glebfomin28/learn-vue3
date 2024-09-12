<script lang="ts" setup>
import { computed, ref } from "vue";
import { FilterEnum, TodoType } from "../domain/todolist.domain";
import TodolistHeader from "./partials/todolist-header.vue";
import TodolistFilters from "./partials/todolist-filters.vue";
import TodolistForm from "./partials/todolist-form.vue";
import TodolistFooter from "./partials/todolist-footer.vue";
import TodolistRenderItems from "./partials/todolist-render-items.vue";

const todos = ref<TodoType[]>([
  {
    id: "1",
    text: "text",
    isCompleted: true,
  },
]);
const currentFilter = ref<FilterEnum>(FilterEnum.ALL);

const filteredTodos = computed(() => filterTodos(currentFilter.value));

const doneTodosCount = computed(() => filterTodos(FilterEnum.DONE).length);
const activeTodosCount = computed(() => filterTodos(FilterEnum.ACTIVE).length);

const addTodo = (todo: TodoType) => {
  todos.value.push(todo);
  currentFilter.value = FilterEnum.ALL;
};

const deleteTodo = (todoId: string) => {
  todos.value = todos.value.filter((item) => item.id !== todoId);
};

const toggleTodo = (todoId: string) => {
  // const currentTodo = todos.value.find((item) => item.id === todoId);
  //
  // if (currentTodo) {
  //   currentTodo.isCompleted = !currentTodo.isCompleted;
  // }

  todos.value = todos.value.map((item) => {
    if (item.id === todoId) {
      return {
        ...item,
        isCompleted: !item.isCompleted,
      };
    }

    return item;
  });
};

const setCurrentFilter = (filterType: FilterEnum) => {
  currentFilter.value = filterType;
};

function filterTodos(filterType: FilterEnum) {
  if (filterType === FilterEnum.ACTIVE) {
    return todos.value.filter((item) => !item.isCompleted);
  } else if (filterType === FilterEnum.DONE) {
    return todos.value.filter((item) => item.isCompleted);
  } else {
    return todos.value;
  }
}
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
