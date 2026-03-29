"use client";

import { useState } from "react";
import { Card } from "../Card";
import { ColorPicker } from "../ColorPicker";
import { RoundCount } from "../RoundCount";
import type { HSL } from "@/lib/colors";

export const Game = ({ defaultColor }: { defaultColor: HSL }) => {
  const [color, setColor] = useState<HSL>(defaultColor);

  return (
    <Card hsl={color}>
      <ColorPicker onChange={setColor} defaultValue={defaultColor} />
      <div className="p-6">
        <RoundCount round={1} maxRounds={5} />
      </div>
    </Card>
  );
};
