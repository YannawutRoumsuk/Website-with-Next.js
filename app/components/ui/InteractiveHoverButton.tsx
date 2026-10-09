"use client";

import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type InteractiveHoverButtonProps = {
  children: ReactNode;
  href: string;
  className?: string;
  external?: boolean;
  inverted?: boolean;
};

// Adapted to this portfolio from the Interactive Hover Button pattern
// published by Magic UI on 21st.dev.
export function InteractiveHoverButton({
  children,
  href,
  className = "",
  external = false,
  inverted = false,
}: InteractiveHoverButtonProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`interactive-button group ${inverted ? "interactive-button--inverted" : ""} ${className}`}
    >
      <span className="interactive-button__dot" aria-hidden />
      <span className="interactive-button__label">{children}</span>
      <ArrowUpRight className="interactive-button__icon" aria-hidden />
    </a>
  );
}
