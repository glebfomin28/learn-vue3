import { defineStore } from 'pinia';
import { TLang } from '~/shared/domain/lang.domain';


export const useLangStore = defineStore('langStore', {
  state: () => ({
    lang: (localStorage.getItem('lang')) as TLang || 'ru',
  }),
  actions: {
    setLang(lang: TLang) {
      localStorage.setItem('lang', lang);
      this.lang = lang;
    },
  },
});
