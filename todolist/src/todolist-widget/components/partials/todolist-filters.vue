<script setup lang="ts">
import { defineEmits, defineProps, toRefs } from "vue";
import { TodoFilterEnum } from "../../domain/todolist.domain";

const filtersConfig: { type: TodoFilterEnum; text: string }[] = [
  { type: TodoFilterEnum.ALL, text: "All" },
  { type: TodoFilterEnum.ACTIVE, text: "Active" },
  { type: TodoFilterEnum.DONE, text: "Done" },
];

const props = defineProps<{
  currentFilter: TodoFilterEnum;
}>();

const { currentFilter } = toRefs(props);

const emit = defineEmits<{
  (e: "setCurrentFilter", filterType: TodoFilterEnum): void;
}>();

const onSetCurrentFilter = (type: TodoFilterEnum) => {
  emit("setCurrentFilter", type);
};
</script>

<template>
  <aside class="app-filters">
    <section class="toggle-group">
      <button
        class="button"
        :class="{ 'button--primary': currentFilter === filter.type }"
        v-for="filter in filtersConfig"
        :key="filter.type"
        @click="onSetCurrentFilter(filter.type)"
      >
        {{ filter.text }}
      </button>
    </section>
  </aside>
</template>

<style scoped></style>
