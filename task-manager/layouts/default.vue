<script setup lang="ts">
import AppLayout from '~/shared/components/app-layout.vue';
import AppHeader from '~/widgets/app-header';

import '~/shared/styles/index.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css';


</script>

<template>
    <AppLayout>
      <template #header>
        <AppHeader />
      </template>
      <template #content>
        <slot />
      </template>
    </AppLayout>
</template>

