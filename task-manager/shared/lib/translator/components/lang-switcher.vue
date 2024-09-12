
<script setup>
import Button  from 'primevue/button';
import { useLangStore } from '../lang.store.ts';

const langStore = useLangStore();

const toggleLang = (oldLang) => {
  const newLang = oldLang === 'ru' ? 'en' : 'ru';
  langStore.setLang(newLang);
}
</script>

<template>
  <div class="card flex justify-center">
    <Button @click="toggleLang(langStore.lang)">
      {{ `${langStore.lang}`.toUpperCase() }}
    </Button>
  </div>
</template>

