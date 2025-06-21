import React from "react";

export function Input({ className = "", ...props }) {
  return (
    <input
      className={`bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  );
}
