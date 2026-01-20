import { ReactNode } from "react";

interface PremiumCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function PremiumCard({ 
  children, 
  className = "", 
  hover = true,
  glow = false 
}: PremiumCardProps) {
  return (
    <div
      className={`
        bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] 
        border border-[#00FFB3]/20 
        rounded-2xl 
        p-6 
        ${hover ? "hover:border-[#00FFB3]/40 hover:shadow-lg hover:shadow-[#00FFB3]/10 hover:-translate-y-1" : ""}
        ${glow ? "shadow-lg shadow-[#00FFB3]/20" : ""}
        transition-all duration-300 
        ${className}
      `}
    >
      {children}
    </div>
  );
}
