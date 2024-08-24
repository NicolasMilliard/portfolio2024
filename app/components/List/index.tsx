export const List = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <ul className={className}>{children}</ul>;
};

export const ListItem = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <li className={`font-book ${className}`}>{children}</li>;
};
