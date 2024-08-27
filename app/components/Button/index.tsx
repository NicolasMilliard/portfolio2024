import { syne } from "@utils/fonts";
// Types
import type { ReactNode } from "react";

export const PrimaryButton = ({
  disabled,
  children,
}: {
  disabled?: boolean;
  children: ReactNode;
}) => {
  return (
    <button
      className={`${syne.className} relative z-10 rounded-xl px-6 py-3 font-semibold ${disabled ? "bg-grey-400 text-grey-700 cursor-not-allowed" : "text-grey-100 cursor-pointer bg-black"}`}
    >
      {children}
    </button>
  );
};
