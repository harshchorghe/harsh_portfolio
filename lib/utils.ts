// lib/utils.ts
// Lightweight replacement for clsx + tailwind-merge to avoid heavy dependencies.
export type ClassValue = string | number | boolean | undefined | null | { [key: string]: any } | ClassValue[];

export function cn(...inputs: ClassValue[]): string {
  const parts: string[] = [];

  function push(val: ClassValue) {
    if (!val && val !== 0) return;
    if (typeof val === "string" || typeof val === "number") {
      parts.push(String(val));
    } else if (Array.isArray(val)) {
      val.forEach(push);
    } else if (typeof val === "object") {
      Object.keys(val).forEach((k) => {
        if ((val as any)[k]) parts.push(k);
      });
    }
  }

  inputs.forEach(push);

  return parts.join(" ").replace(/\s+/g, " ").trim();
}