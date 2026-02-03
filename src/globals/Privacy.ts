import { revalidatePath } from "next/cache";
import { GlobalConfig } from "payload";

export const Privacy: GlobalConfig = {
  slug: "privacy",
  label: {
    de: "Datenschutzerklärung",
    en: "Privacy Policy",
  },
  hooks: {
    afterChange: [
      () => {
        revalidatePath("/(app)/[lang]/(main)/privacy", "page");
      },
    ],
  },
  admin: {
    preview: (_, { locale }) => `/${locale}/privacy`,
  },
  fields: [
    {
      name: "content",
      type: "richText",
      localized: true,
    },
  ],
};
