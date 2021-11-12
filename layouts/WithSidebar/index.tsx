interface WithSidebarProps {
  children: React.ReactNode;
}

const WithSidebar = ({ children }: WithSidebarProps): JSX.Element => {
  return <>{children}</>;
};

export default WithSidebar;
