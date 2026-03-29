import { ReactNode } from "react";
import type { HSL } from "@/lib/colors";

export const Card = ({ hsl, children }: { hsl: HSL; children: ReactNode }) => {
  return (
    <div
      className="h-96 w-md rounded-2xl shadow-2xl flex overflow-hidden"
      style={{ backgroundColor: `hsl(${hsl.h} ${hsl.s}% ${hsl.l}%)` }}
    >
      {children}
    </div>
  );
};
