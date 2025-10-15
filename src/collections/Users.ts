import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  labels: {
    plural: { de: "Nutzer", en: "User" },
    singular: { de: "Nutzer", en: "Users" },
  },

  admin: {
    useAsTitle: "name",
  },

  // 30 days JWT auth expiration date
  auth: { tokenExpiration: 60 * 60 * 24 * 30 },
  fields: [
    { name: "name", type: "text" },
    { name: "email", type: "text" },
  ],
};
