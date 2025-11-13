// components/Marquee.tsx
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Marquee({ children }: Props) {
  return (
    <div className="relative w-full overflow-hidden bg-neutral-950 py-8">
      <div className="flex w-max marquee-content">
        {/* Duplicate content for seamless loop */}
        <div className="animate-marquee flex space-x-8 px-8">{children}</div>
        <div className="animate-marquee flex space-x-8 px-8">{children}</div>
      </div>
    </div>
  );
}