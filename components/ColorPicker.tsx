"use client";

import { Slider, SliderThumb, SliderTrack } from "@radix-ui/react-slider";
import { useState } from "react";
import type { HSL } from "@/lib/colors";

export const ColorPicker = ({
  onChange,
  defaultValue,
}: {
  onChange: (color: HSL) => void;
  defaultValue: HSL;
}) => {
  const [hsl, setHsl] = useState<HSL>(defaultValue);

  return (
    <section className="flex h-full">
      <ColorSlider
        background={hue}
        value={hsl.h}
        onValueChange={(value) => {
          const color = { ...hsl, h: value };
          setHsl(color);
          onChange(color);
        }}
        max={360}
        inverted
      />
      <ColorSlider
        background={`linear-gradient(hsl(${hsl.h}, ${hsl.l}%, ${hsl.l / 2}%), hsl(${hsl.h}, 0%, ${hsl.l}%))`}
        value={hsl.s}
        onValueChange={(value) => {
          const color = { ...hsl, s: value };
          setHsl(color);
          onChange(color);
        }}
        max={100}
      />
      <ColorSlider
        background={`linear-gradient(hsl(${hsl.h}, ${hsl.s}%, ${100 - 0.5 * hsl.s}%), hsl(${hsl.h}, 0%, 0%))`}
        value={hsl.l}
        onValueChange={(value) => {
          setHsl({ ...hsl, l: value });
          onChange({ ...hsl, l: value - hsl.s * 0.5 * (value / 100) });
        }}
        max={100}
      />
    </section>
  );
};

const hue = `linear-gradient(
  rgb(255, 0, 0) 0%,
  rgb(255, 255, 0) 16.7%,
  rgb(128, 255, 0) 25%,
  rgb(0, 255, 0) 33.3%,
  rgb(0, 255, 128) 41.7%,
  rgb(0, 255, 255) 50%,
  rgb(0, 128, 255) 58.3%,
  rgb(0, 0, 255) 66.7%,
  rgb(128, 0, 255) 75%,
  rgb(255, 0, 255) 83.3%,
  rgb(255, 0, 128) 91.7%,
  rgb(255, 0, 0) 100%
)`;

const ColorSlider = ({
  background,
  value,
  onValueChange,
  max,
  inverted = false,
}: {
  background: string;
  value: number;
  onValueChange: (value: number) => void;
  max: number;
  inverted?: boolean;
}) => {
  return (
    <Slider
      value={[value]}
      onValueChange={(value) => {
        onValueChange(value[0]);
      }}
      max={max}
      step={1}
      inverted={inverted}
      orientation="vertical"
      className="relative flex h-full w-10 touch-none select-none justify-center"
    >
      <SliderTrack
        className="grow"
        style={{
          background,
        }}
      />
      <SliderThumb className="block w-8 h-2 rounded-full cursor-grab bg-mist-100 shadow-xs shadow-mist-800 hover:bg-mist-200 transition-colors focus:outline-mist-800 focus:outline-1 outline-offset-1 focus:cursor-grabbing" />
    </Slider>
  );
};
