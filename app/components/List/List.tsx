const List = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <ul className={className}>{children}</ul>;
};

export default List;
