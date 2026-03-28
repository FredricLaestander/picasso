import { ReactNode } from "react";
import { RoundCount } from "./RoundCount";
import type { RGB } from "@/lib/colors";

export const Card = ({
  round,
  maxRounds,
  rgb,
  children,
}: {
  round: number;
  maxRounds: number;
  rgb: RGB;
  children: ReactNode;
}) => {
  return (
    <div
      className="h-96 w-md rounded-2xl shadow-2xl p-6"
      style={{ backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` }}
    >
      <RoundCount round={round} maxRounds={maxRounds} />
      {children}
    </div>
  );
};
