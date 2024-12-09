"use client";

import NumberInput from "@/components/common/Input/NumberInput";

export default function HomePage() {
  return (
    <div>
      <NumberInput label="만나이" name="age" placeholder="만나이를 입력하세요" min={0} />
    </div>
  );
}
