import { cn } from "@/lib/utils";
import { SVGProps } from "react";

export default function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center justify-center gap-4">
      <svg
        {...props}
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("h-10", props.className)}
      >
        <path d="M8.01005 0.858582L6.01005 14.8586L7.98995 15.1414L9.98995 1.14142L8.01005 0.858582Z" />
        <path d="M12.5 11.5L11.0858 10.0858L13.1716 8L11.0858 5.91422L12.5 4.5L16 8L12.5 11.5Z" />
        <path d="M2.82843 8L4.91421 10.0858L3.5 11.5L0 8L3.5 4.5L4.91421 5.91422L2.82843 8Z" />
      </svg>
      <LogoTitle />
    </div>
  );
}

function LogoTitle() {
  return <h1 className="text-lg font-bold">Dev App</h1>;
}
