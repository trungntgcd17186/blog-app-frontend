import { Outlet, createBrowserRouter, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail/Detail";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Login from "../pages/Login/Login";
import ManageAccount from "../pages/ManageAccount";
import ManageBlog from "../pages/ManageBlog";
import Profile from "../pages/Profile";

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
        element: <Profile />,
        path: "/profile",
      },
      {
        element: <ManageAccount />,
        path: "/manage-account",
      },
      {
        element: <ManageBlog />,
        path: "/manage-blog",
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
