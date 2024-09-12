import { useLangStore } from '~/shared/lib/translator/lang.store';


export function createTranslations<
  T extends Record<string, Record<string, string>>,
>(translations: T) {
  return function useI18n() {
    const langStore = useLangStore();

    return {
      t: (key: keyof T) => {
        return translations[key]?.[langStore.lang as string] ?? key;
      },
    };
  };
}

