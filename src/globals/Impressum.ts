import { revalidatePath } from "next/cache";
import { GlobalConfig } from "payload";

export const Impressum: GlobalConfig = {
  slug: "impressum",
  label: {
    de: "Impressum",
    en: "Imprint",
  },
  hooks: {
    afterChange: [
      () => {
        revalidatePath("/(app)/[lang]/(main)/impressum", "page");
      },
    ],
  },
  admin: {
    preview: (_, { locale }) => `/${locale}/impressum`,
  },
  fields: [{ name: "content", type: "richText", localized: true }],
};
