<script setup lang="ts">

import { routes } from '~/shared/config/router.config';
import { useTranslator } from '../translations';
import LangSwitcher from '~/shared/lib/translator';


const { t } = useTranslator();

</script>

<template>
  <header class="header">
    <div class="header_content">
      <NuxtLink :to="routes.home()">
        <div class="header_content_logo">LOGO</div>
      </NuxtLink>
      <nav class="header_content_nav">
        <NuxtLink :to="routes.users()">{{ t('users') }}</NuxtLink>
        <NuxtLink :to="routes.boards()">{{ t('boards') }}</NuxtLink>
        <NuxtLink :to="routes.about()">{{ t('about') }}</NuxtLink>

      </nav>
      <LangSwitcher />
      <slot name="lang-switcher"/>
      <slot name="user-account"/>
    </div>
  </header>
</template>

<style scoped>
.header {
  box-shadow: 0 1px 12px 0 rgba(0, 0, 0, 0.15);
}

.header_content {
  margin: auto;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: var(--width-page);
}

.header_content_logo {
  color: var(--color-main);
  font-size: 24px;
  font-weight: bold;
}

.header_content_nav {
  display: flex;
  align-items: center;
  gap: 16px;
}
</style>
