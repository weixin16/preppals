import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export type HeroBreadcrumbItem = {
  label: string;
  to?: string;
  active?: boolean;
};

type HeroBreadcrumbProps = {
  items: HeroBreadcrumbItem[];
  className?: string;
  theme?: "light" | "dark";
};

const HeroBreadcrumb: React.FC<HeroBreadcrumbProps> = ({
  items,
  className = "",
  theme = "light",
}) => {
  const baseClasses =
    theme === "dark"
      ? "bg-white/10 border border-white/15 text-white shadow-none backdrop-blur-sm"
      : "bg-white/70 border border-navy-900/10 text-navy-900 shadow-sm backdrop-blur-sm";

  const activeClasses =
    theme === "dark" ? "text-[#FDE1C3]" : "text-coral-500";

  const linkClasses =
    theme === "dark"
      ? "hover:text-[#FDE1C3] transition-colors"
      : "hover:text-coral-500 transition-colors";

  return (
    <div
      className={`inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${baseClasses} ${className}`}
    >
      {items.map((item, idx) => (
        <React.Fragment key={`${item.label}-${idx}`}>
          {idx > 0 && <ChevronRight size={12} />}
          {item.to && !item.active ? (
            <Link to={item.to} className={linkClasses}>
              {item.label}
            </Link>
          ) : (
            <span className={item.active ? activeClasses : ""}>
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default HeroBreadcrumb;