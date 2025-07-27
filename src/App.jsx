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
import AuthProvider from "./Context/Auth.context";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import Cart from "./Pages/Cart/Cart";
import CartProvider from "./Context/Cart.context";
import WishListProvider from "./Context/WishList.context";
import OffLineScreen from "./Components/OffLineScreen/OffLineScreen";
import SubCategoriesProvider from "./Context/Subcategories.context";
import BrandsProvider from "./Context/Brands.context";
import FeaturedProducts from "./Pages/FeaturedProducts/FeaturedProducts";
import Deals from "./Pages/Deals/Deals";
import VerifyResetCode from "./Pages/VerifyResetCode/VerifyResetCode";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import ProtectVerifyResetCode from "./Components/ProtectedRoute/ProtectVerifyResetCode";

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
          path: "VerifyResetCode",
          element: (
            <ProtectVerifyResetCode>
              <VerifyResetCode />,
            </ProtectVerifyResetCode>
          ),
        },
        {
          path: "ResetPassword",
          element: (
            <ProtectVerifyResetCode>
              <ResetPassword />
            </ProtectVerifyResetCode>
          ),
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
          path: "Deals",
          element: <Deals />,
        },
        {
          path: "Checkout",
          element: (
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          ),
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
          path: "FeaturedProducts",
          element: <FeaturedProducts />,
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
          path: "Cart",
          element: (
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          ),
        },
        {
          path: "Favourites",
          element: (
            <ProtectedRoute>
              <Favourites />
            </ProtectedRoute>
          ),
        },
        {
          path: "Orders",
          element: (
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          ),
        },

        {
          path: "WishList",
          element: (
            <ProtectedRoute>
              <WishList />
            </ProtectedRoute>
          ),
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
      <OffLineScreen>
        <AuthProvider>
          <WishListProvider>
            <CartProvider>
              <ProductsProvider>
                <BrandsProvider>
                  <SubCategoriesProvider>
                    <CategoriesProvider>
                      <RouterProvider router={router} />
                      <ToastContainer
                        position="top-right"
                        autoClose={3000}
                        closeButton={false}
                        closeOnClick={true}
                      />
                    </CategoriesProvider>
                  </SubCategoriesProvider>
                </BrandsProvider>
              </ProductsProvider>
            </CartProvider>
          </WishListProvider>
        </AuthProvider>
      </OffLineScreen>
    </>
  );
}

export default App;
