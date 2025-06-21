import React from "react";

export function Card({ children, className }) {
  return (
    <div className={`bg-gray-800 rounded-xl p-4 shadow-lg ${className || ""}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className }) {
  return <div className={className}>{children}</div>;
}
