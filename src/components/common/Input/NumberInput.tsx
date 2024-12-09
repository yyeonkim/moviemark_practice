"use client";

import { forwardRef, memo, useState } from "react";

import type { BaseInputProps } from "@/types/input";

import BaseInput from "./BaseInput";

export type NumberInputProps = Omit<BaseInputProps, "type" | "rightElement">;

const NumberInput = memo(
  forwardRef<HTMLInputElement, NumberInputProps>((props, ref) => {
    return <BaseInput type="number" ref={ref} {...props} />;
  }),
);

NumberInput.displayName = "NumberInput";

export default NumberInput;
