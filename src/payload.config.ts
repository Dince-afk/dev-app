// import { postgresAdapter } from "@payloadcms/db-postgres";
// import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { seoPlugin } from "@payloadcms/plugin-seo";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { de } from "@payloadcms/translations/languages/de";
import { en } from "@payloadcms/translations/languages/en";
import path from "path";
import { buildConfig } from "payload";
import sharp from "sharp";
import { fileURLToPath } from "url";

import { Images } from "./collections/Images";
import { Media } from "./collections/Media";
import { Users } from "./collections/Users";
import { Impressum } from "./globals/Impressum";
import { Privacy } from "./globals/Privacy";
import { Homepage } from "./globals/Homepage";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  i18n: { supportedLanguages: { de, en } }, // The language displayed in all of the /admin page
  localization: { defaultLocale: "de", locales: ["de", "en"] }, // The localization our data can be in
  admin: {
    meta: {
      titleSuffix: " - Admin", // A suffix behind every path and sub path under /admin
    },
    dateFormat: "HH:mm:ss, do MMM yyy", // Anytime dates will be shown in the /admin site it will use this format

    user: Users.slug, // Define the main user collection
    importMap: {
      baseDir: path.resolve(dirname),
    },
    // Autofill credentials in dev env
    autoLogin:
      process.env.NODE_ENV === "development"
        ? {
            email: process.env.ADMIN_EMAIL,
            password: process.env.ADMIN_PW,
            prefillOnly: true,
          }
        : false,
    avatar: "default", // Nicer looking avatar icon

    // Add custom components to /admin sites
    components: {
      beforeDashboard: ["@/components/admin/before-dashboard"],
      actions: ["@/components/admin/actions"],
    },
  },

  collections: [Users, Media, Images],
  globals: [Homepage, Impressum, Privacy],

  editor: lexicalEditor(), // Choose your editor when modifying rich text data content
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },

  // Setup db
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || "",
    },
  }),

  sharp,

  // Add extra plugins from payloadcms or community built
  plugins: [
    // vercelBlobStorage({
    //   enabled: true, // Optional, defaults to true
    //   // Specify which collections should use Vercel Blob
    //   collections: {
    //     // manuals: {
    //     //   prefix: "manual-battery-charger/manuals",
    //     // },
    //     images: {
    //       prefix: "dev-app/images", // Creates nice subfolders in blob storage for the images collection
    //     },
    //   },
    //   clientUploads: true, // Critical to circumvent upload file size limits on vercel (4 mb?)
    //   token: process.env.BLOB_READ_WRITE_TOKEN, // Token provided by Vercel once Blob storage is added to your Vercel project
    // }),

    seoPlugin({
      tabbedUI: true,
      collections: [],
      globals: ["impressum", "privacy"],
      uploadsCollection: "images",
      generateURL: ({ locale, globalSlug }) =>
        `${process.env.NEXT_PUBLIC_SERVER_URL}/${locale}/${globalSlug}`,
      // generateTitle: ({ doc }) =>
      //   `${doc.title} — Batterieladegerät Bedienungsanleitung`,
    }),
  ],
});
