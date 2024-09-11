<script setup lang="ts">
import { defineEmits, defineProps, toRefs } from "vue";
import { FilterType, TodoType } from "@/entities/todo/todo.type";

const filtersConfig: { type: FilterType; text: string }[] = [
  { type: "all", text: "All" },
  { type: "active", text: "Active" },
  { type: "done", text: "Done" },
];

const props = defineProps<{
  currentFilter: FilterType;
}>();

const { currentFilter } = toRefs(props);

const emit = defineEmits<{
  (e: "setCurrentFilter", filterType: FilterType): void;
}>();

const onSetCurrentFilter = (type: FilterType) => {
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

<style scoped>
.app-filters {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}
</style>
