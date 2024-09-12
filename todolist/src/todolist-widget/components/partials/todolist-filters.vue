<script setup lang="ts">
import { defineEmits, defineProps, toRefs } from "vue";
import { FilterEnum } from "../../domain/todolist.domain";

const filtersConfig: { type: FilterEnum; text: string }[] = [
  { type: FilterEnum.ALL, text: "All" },
  { type: FilterEnum.ACTIVE, text: "Active" },
  { type: FilterEnum.DONE, text: "Done" },
];

const props = defineProps<{
  currentFilter: FilterEnum;
}>();

const { currentFilter } = toRefs(props);

const emit = defineEmits<{
  (e: "setCurrentFilter", filterType: FilterEnum): void;
}>();

const onSetCurrentFilter = (type: FilterEnum) => {
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
