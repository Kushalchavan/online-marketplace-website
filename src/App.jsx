import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import SellYourArt from "./pages/sell your art/SellYourArt";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";

const App = () => {
  const Layout = () => {
    return (
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/selling",
          element: <SellYourArt />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
