import * as React from "react";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      {children}

      <Footer />

      <Toaster position="bottom-center" gutter={8} />
    </>
  );
};

export default Layout;
