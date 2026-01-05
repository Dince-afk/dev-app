"use client";

import { Dispatch, SetStateAction } from "react";

export function AccordionItem({
  id,
  title,
  description,
  showDescription,
  setSelectedOption,
}: {
  id: "essential" | "marketing" | "analytics" | "functional";
  title: string;
  description: string;
  showDescription: boolean;
  setSelectedOption: Dispatch<
    SetStateAction<
      "essential" | "marketing" | "analytics" | "functional" | null
    >
  >;
}) {
  function handleClick() {
    setSelectedOption((oldValue) => {
      if (oldValue === id) return null;
      return id;
    });
  }

  return (
    <>
      <div className="flex items-center justify-between hover:bg-neutral-50 dark:hover:bg-black">
        <p
          className="w-full px-4 py-3 text-sm font-medium"
          onClick={handleClick}
          role="button"
        >
          {title}
        </p>
        <div className="flex items-center justify-center px-4 py-3">
          <input
            type="checkbox"
            name={id}
            id={id}
            disabled={id === "essential" ? true : undefined}
            defaultChecked={id === "essential" ? true : false}
            className="size-4 cursor-pointer"
          />
        </div>
      </div>
      {showDescription && (
        <p className="text-muted-foreground px-4 py-3 text-sm font-light">
          {description}
        </p>
      )}
    </>
  );
}
