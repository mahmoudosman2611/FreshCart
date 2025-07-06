import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ScrollToTop from "../scroolToTop/ScrollToTop";

export default function Layout() {
  return (
    <>
    <ScrollToTop/>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
