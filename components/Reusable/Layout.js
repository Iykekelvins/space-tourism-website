import { Navbar } from "../";

const Layout = ({ children, noNav = false }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
