import React from "react";
// import { getPayload } from "payload";
// import config from "@payload-config";
// // import { RefreshRouteOnSave } from "@/components/refresh-route-on-save";
// import { draftMode } from "next/headers";
// import { RichText } from "@payloadcms/richtext-lexical/react";
// import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ lang: string }>;
// }) {
//   let { lang } = await params;
//   if (!lang || lang !== "de") lang = "en"; // default to en for all other lang params (hr, fr, es, ...)
//   const payload = await getPayload({ config });
//   const t = await payload.findGlobal({
//     slug: "impressum",
//     locale: (lang as "en") || "de",
//   });

//   return {
//     title: t.meta?.title,
//     description: t.meta?.description,
//   };
// }

// export async function generateStaticParams() {
//   const payload = await getPayload({ config });
//   const t = await payload.find({
//     collection: "translations",
//     select: { languageIsoCode: true },
//     pagination: false,
//   });
//   // console.log(
//   //   "generateStaticParams()",
//   //   t.docs.map((langData) => ({ lang: langData.languageIsoCode })),
//   // );
//   return t.docs.map((langData) => ({ lang: langData.languageIsoCode }));
//   // const languageData = await fetchLanguages();
//   // return languageData.map((lang) => ({ lang: lang.languageIsoCode }));
// }

export default async function Page(
  {
    //   params,
    // }: {
    //   params: Promise<{ lang: string }>;
  },
) {
  // const { isEnabled } = await draftMode();
  // let { lang } = await params;
  // if (!lang || lang !== "de") lang = "en"; // default to en for all other lang params (hr, fr, es, ...)
  // const payload = await getPayload({ config });
  // const t = await payload.findGlobal({
  //   slug: "privacy",
  //   locale: (lang as "de") || "en",
  //   draft: isEnabled,
  // });
  // const content = t.content as SerializedEditorState;

  return (
    <>
      {/* <RefreshRouteOnSave /> */}
      <div className="container mx-auto min-h-screen px-4 py-[7vh] pb-[15vh]">
        <div className="prose dark:prose-invert mx-auto max-w-prose space-y-10 text-sm">
          {/* <RichText data={content} /> */}
        </div>
      </div>
    </>
  );
}
