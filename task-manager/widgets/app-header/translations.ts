import { createTranslations } from "@/shared/lib/translator";

export const useTranslator = createTranslations({
  "users": {
    en: "Users",
    ru: "Пользователи",
  },
  "boards": {
    en: "Boards",
    ru: "Доски",
  },
  "about": {
    en: "About",
    ru: "О нас",
  },
} as const);
