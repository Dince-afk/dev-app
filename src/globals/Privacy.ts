import { revalidatePath } from "next/cache";
import { GlobalConfig } from "payload";

export const Privacy: GlobalConfig = {
  slug: "privacy",
  label: {
    de: "Datenschutzerklärung",
    en: "Privacy Policy",
  },
  versions: {
    drafts: {
      autosave: false,
    },
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
    livePreview: {
      url: ({ locale }) => {
        const pageUrl = `/${locale}/privacy`;
        return `${process.env.NEXT_PUBLIC_SERVER_URL}/api/draft?secret=${process.env.PAYLOAD_SECRET}&redirectPath=${pageUrl}`;
      },
    },
  },
  fields: [
    {
      name: "content",
      type: "richText",
      localized: true,
    },
  ],
};
