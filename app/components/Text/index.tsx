export const Paragraph = ({ children }: { children: any }) => {
  return <p className="max-w-200 font-book text-black">{children}</p>;
};

export const GradientParagraph = ({ children }: { children: any }) => {
  return (
    <p className="w-fit bg-gradient-to-r from-ultramarine to-congo_pink bg-clip-text font-normal text-transparent">
      {children}
    </p>
  );
};
