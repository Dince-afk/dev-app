import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Toggle } from "@/components/ui/toggle";

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex gap-4">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="outline">Outline</Button>
      </div>
      <div className="flex flex-col gap-4">
        <Input placeholder="Text" />
        <Input type="email" placeholder="Email" />
        <Input type="file" placeholder="File" />
      </div>
      <Toggle>Toggle</Toggle>
      <Calendar />
    </div>
  );
}
