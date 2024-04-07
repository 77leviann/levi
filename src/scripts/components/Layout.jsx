import PropTypes from "prop-types";
import NavBar from "@components/NavBar";
import Footer from "@components/Footer";
import ScrollToTopButton from "@components/ScrollUp";

const Layout = ({ children, isHome }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {isHome && <NavBar />}
      <main className="flex-1">{children}</main>
      <ScrollToTopButton />
      <Footer/>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
};

export default Layout;
