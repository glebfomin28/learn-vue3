<script setup lang="ts">

import Button from 'primevue/button';

</script>

<template>
<div class="layout">
  <header class="layout_header">
    <slot name="header"/>
  </header>
  <main class="layout_content">
    <slot name="content"/>
  </main>
</div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.layout_header {
  position: sticky;
  top: 0;
  z-index: 1;
}

.layout_content {
  flex: auto;
}
</style>
