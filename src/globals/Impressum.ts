import { revalidatePath } from "next/cache";
import { GlobalConfig } from "payload";

export const Impressum: GlobalConfig = {
  slug: "impressum",
  label: {
    de: "Impressum",
    en: "Imprint",
  },
  versions: {
    drafts: {
      autosave: false,
    },
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
    livePreview: {
      url: ({ locale }) => {
        const pageUrl = `/${locale}/impressum`;
        return `${process.env.NEXT_PUBLIC_SERVER_URL}/api/draft?secret=${process.env.PAYLOAD_SECRET}&redirectPath=${pageUrl}`;
      },
    },
  },
  fields: [{ name: "content", type: "richText", localized: true }],
};
