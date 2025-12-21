// components/ui/expandable-tabs.tsx
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";


interface Tab {
  title: string;
  icon: React.ComponentType<{ size?: number }>;
  href: string;
  type?: never;
}

interface Separator {
  type: "separator";
  title?: never;
  icon?: never;
  href?: never;
}

type TabItem = Tab | Separator;

interface ExpandableTabsProps {
  tabs: TabItem[];
  className?: string;
  activeColor?: string;
  onChange?: (index: number | null) => void;
}

// Simple CSS-driven expand/collapse for compatibility and smaller bundle
const transition = "all 220ms cubic-bezier(.2,.9,.2,1)";

export function ExpandableTabs({
  tabs,
  className,
  activeColor = "text-primary",
  onChange,
}: ExpandableTabsProps) {
  const [selected, setSelected] = React.useState<number | null>(null);
  const outsideClickRef = React.useRef<HTMLDivElement | null>(null);

  // Simple onClickOutside implementation
  React.useEffect(() => {
    function handle(e: MouseEvent) {
      const node = outsideClickRef.current;
      if (!node) return;
      if (e.target instanceof Node && !node.contains(e.target)) {
        setSelected(null);
        onChange?.(null);
      }
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [onChange]);

  const handleSelect = (index: number) => {
    const next = selected === index ? null : index;
    setSelected(next);
    onChange?.(next);
  };

  const Separator = () => (
    <div className="mx-1 h-6 w-[1.2px] bg-border" aria-hidden="true" />
  );

  return (
    <div
      ref={outsideClickRef}
      className={cn(
        "flex flex-wrap items-center gap-2 rounded-2xl border bg-background p-1 shadow-sm",
        className
      )}
    >
      {tabs.map((tab, index) => {
        if (tab.type === "separator") {
          return <Separator key={`separator-${index}`} />;
        }

        const Icon = tab.icon;

        return (
          <a href={tab.href} key={tab.title}>
            <button
              onClick={() => handleSelect(index)}
              style={{ transition }}
              className={cn(
                "relative flex items-center rounded-xl px-4 py-2 text-sm font-medium",
                "transition-colors duration-200",
                selected === index
                  ? cn("bg-muted", activeColor)
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon size={20} />
              <span
                className={cn(
                  "ml-2 overflow-hidden whitespace-nowrap",
                  selected === index ? "max-w-60 opacity-100" : "max-w-0 opacity-0"
                )}
                style={{ transition }}
                aria-hidden={selected !== index}
              >
                {tab.title}
              </span>
            </button>
          </a>
        );
      })}
    </div>
  );
}