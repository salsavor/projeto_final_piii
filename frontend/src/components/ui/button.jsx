import React from "react";
import clsx from "clsx";

export function Button({
  children,
  className = "",
  variant = "primary",
  disabled = false,
  loading = false,
  ...props
}) {
  const baseStyle = `
    inline-flex items-center justify-center
    px-5 py-2.5
    font-medium text-sm
    rounded-2xl
    transition-all duration-200 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    shadow-md
  `;

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary:
      "bg-red-700 text-white hover:bg-gray-600 focus:ring-gray-500",
    outline:
      "border border-blue-500 text-white hover:bg-gray-800 focus:ring-gray-400",
    danger:
      "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  };

  const disabledStyle = "opacity-50 cursor-not-allowed";

  return (
    <button
      disabled={disabled || loading}
      className={clsx(
        baseStyle,
        variants[variant],
        className,
        (disabled || loading) && disabledStyle
      )}
      {...props}
    >
      {loading ? (
        <span className="animate-pulse">Carregando...</span>
      ) : (
        children
      )}
    </button>
  );
}
