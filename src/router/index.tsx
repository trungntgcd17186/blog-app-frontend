import { Outlet, createBrowserRouter, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Detail from "../pages/Detail/Detail";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { motion, AnimatePresence } from "framer-motion";

export const AuthLayout = () => {
  const location = useLocation();
  return (
    <>
      <Header />
      <AnimatePresence>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0, ease: "easeInOut" }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>

      <Footer />
    </>
  );
};

export default createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        element: <Login />,
        path: "/login",
      },
      {
        element: <Detail />,
        path: "/blog-detail/:id",
      },
      {
        element: <Home />,
        path: "/",
      },
    ],
  },
]);
