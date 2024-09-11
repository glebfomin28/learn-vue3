<script setup lang="ts">
import { defineEmits, ref } from "vue";
import { TodoType } from "@/entities/todo";

const isOpenForm = ref<boolean>(false);
const textTodo = ref<string>("");

const emit = defineEmits<{
  (e: "addTodo", todo: TodoType): void;
}>();

const onAddTodo = () => {
  const newTodo: TodoType = {
    id: Date.now().toString(),
    text: textTodo.value,
    isCompleted: false,
  };

  if (textTodo.value) {
    emit("addTodo", newTodo);
    isOpenForm.value = false;
    textTodo.value = "";
  }
};
</script>

<template>
  <section class="add-todo">
    <button class="add-todo__show-form-button" @click="isOpenForm = true">
      <i class="bi bi-plus-lg"></i>
    </button>

    <form class="add-todo__form" v-if="isOpenForm" @submit.prevent="onAddTodo">
      <button class="close-button" type="button" @click="isOpenForm = false">
        <i class="bi bi-x"></i>
      </button>
      <div class="text-input text-input--focus">
        <input class="input" v-model="textTodo" />
      </div>
      <button class="button button--filled" type="submit">Add todo</button>
    </form>
  </section>
</template>

<style scoped></style>
