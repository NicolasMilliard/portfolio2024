const ListItem = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <li className={`font-book ${className}`}>{children}</li>;
};

export default ListItem;
