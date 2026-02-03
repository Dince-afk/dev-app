import { CollectionConfig } from "payload";

export const Images: CollectionConfig = {
  slug: "images",
  admin: {},
  labels: {
    singular: { de: "Bild", en: "Image" },
    plural: { de: "Bilder", en: "Images" },
  },
  upload: {
    // imageSizes: [
    //   {
    //     name: "thumbnail",
    //     width: 300,
    //     position: "centre",
    //     formatOptions: { format: "webp" }, // Error?
    //   },
    // ],
    // adminThumbnail: "thumbnail",
    mimeTypes: ["image/*"],
    formatOptions: {
      options: { quality: 85 },
      format: "webp",
    },
    resizeOptions: { width: 3000, withoutEnlargement: true }, // 4K displays have 3840px
  },
  fields: [
    {
      name: "alt",
      type: "text",
    },
  ],
};
