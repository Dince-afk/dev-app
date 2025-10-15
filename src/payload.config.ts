// storage-adapter-import-placeholder
import { postgresAdapter } from "@payloadcms/db-postgres";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { seoPlugin } from "@payloadcms/plugin-seo";
import { en } from "@payloadcms/translations/languages/en";
import { de } from "@payloadcms/translations/languages/de";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Impressum } from "./globals/Impressum";
import { Privacy } from "./globals/Privacy";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  i18n: { supportedLanguages: { de, en } }, // the language displayed in all of the /admin page
  localization: { defaultLocale: "de", locales: ["de", "en"] }, // the localization our data can be in
  admin: {
    meta: {
      titleSuffix: " - Admin", // a suffix behind every path and sub path under /admin
    },
    dateFormat: "HH:mm:ss, do MMM yyy", // anytime dates will be shown in the /admin site it will use this format

    user: Users.slug, // define the main user collection
    importMap: {
      baseDir: path.resolve(dirname),
    },
    // autofill credentials in dev env
    autoLogin:
      process.env.NODE_ENV === "development"
        ? {
            email: "dino.c@me.com",
            password: "D14QG7d$£MKj",
            prefillOnly: true,
          }
        : false,
    avatar: "default", // nicer looking avatar icon
    components: {
      beforeDashboard: ["@/components/admin/before-dashboard"],
      actions: ["@/components/admin/actions"],
      // afterDashboard: ["@/components/admin/after-dashboard"],
    },
  },

  collections: [Users, Media],
  globals: [Impressum, Privacy],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
    seoPlugin({
      tabbedUI: true,
      collections: [],
      globals: ["impressum", "privacy"],
      uploadsCollection: "media",
      generateURL: ({ locale, globalSlug }) =>
        `${process.env.NEXT_PUBLIC_SERVER_URL}/${locale}/${globalSlug}`,
      // generateTitle: ({ doc }) =>
      //   `${doc.title} — Batterieladegerät Bedienungsanleitung`,
    }),
  ],
});
