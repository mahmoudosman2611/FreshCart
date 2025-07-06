import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import WishList from "./Pages/WishList/WishList";
import Orders from "./Pages/Orders/Orders";
import Favourites from "./Pages/Favourites/Favourites";
import SignUp from "./Pages/SignUp/SignUp";
import ForgetPassword from "./Pages/ForgetPassword/ForgetPassword";
import VerifyEmail from "./Pages/VerifyEmail/VerifyEmail";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Checkout from "./Pages/Checkout/Checkout";
import SearchProducts from "./Pages/SearchProducts/SearchProducts";
import Categories from "./Pages/Categories/Categories";
import Brands from "./Pages/Brands/Brands";
import { ToastContainer } from "react-toastify";
import Loading from "./Components/Loading/Loading";
import ProductsProvider from "./Context/Products.context";
import CategoriesProvider from "./Context/Categories.context";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "Login",
          element: <Login />,
        },
        {
          path: "Brands",
          element: <Brands />,
        },
        {
          path: "Categories",
          element: <Categories />,
        },
        {
          path: "SearchProducts",
          element: <SearchProducts />,
        },
        {
          path: "Checkout",
          element: <Checkout />,
        },
        {
          path: "Product/:id",
          element: <ProductDetails />,
        },
        {
          path: "VerifyEmail",
          element: <VerifyEmail />,
        },
        {
          path: "ForgetPassword",
          element: <ForgetPassword />,
        },
        {
          path: "SignUp",
          element: <SignUp />,
        },
        {
          path: "Favourites",
          element: <Favourites />,
        },
        {
          path: "Orders",
          element: <Orders />,
        },

        {
          path: "WishList",
          element: <WishList />,
        },
        {
          path: "Loading",
          element: <Loading />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return (
    <>
      <ProductsProvider>
        <CategoriesProvider>
          <RouterProvider router={router} />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            closeButton={false}
            closeOnClick={true}
          />
        </CategoriesProvider>
      </ProductsProvider>
    </>
  );
}

export default App;
