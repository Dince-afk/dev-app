import { CollectionConfig } from "payload";

export const Images: CollectionConfig = {
  slug: "images",
  admin: {},
  labels: {
    singular: { de: "Bild", en: "Image" },
    plural: { de: "Bilder", en: "Images" },
  },
  upload: {
    mimeTypes: ["image/*"],
    formatOptions: {
      options: { quality: 85 },
      format: "webp",
    },
    resizeOptions: { width: 2500, withoutEnlargement: true },
  },
  fields: [
    {
      name: "alt",
      type: "text",
    },
  ],
};
