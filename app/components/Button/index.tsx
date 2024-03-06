import { syne } from "@utils/fonts";

export const PrimaryButton = ({ children }: any) => {
  return (
    <div className="group relative inline-block">
      <button
        className={`${syne.className} relative z-10 rounded-xl bg-black px-6 py-3 font-semibold text-grey`}
      >
        {children}
      </button>
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-ultramarine to-congo_pink opacity-0 blur-lg duration-200 group-hover:opacity-100"></div>
    </div>
  );
};

export default PrimaryButton;
