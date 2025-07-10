import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCartShopping,
  faShieldHalved,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import CartItem from "../../Components/CartItem/CartItem";
import { useContext } from "react";
import { CartContext } from "../../Context/Cart.context";
import Loading from "../../Components/Loading/Loading";

export default function Cart() {
  const { cartinfo, isLoading } = useContext(CartContext);
  if (isLoading) {
    return <Loading />;
  }

  const { numOfCartItems, data } = cartinfo;
  const { products, totalCartPrice } = data;

  return (
    <>
      <section>
        <div className="container">
          <div className="grid grid-cols-12 gap-4 gap-y-6 py-6">
            <div className="left col-span-12 lg:col-span-8 p-4 items-start border-2 border-gray-200 rounded-lg">
              <div className="border-b-2 border-gray-500/50">
                <h2 className="text-2xl font-bold text-black/80 mb-2">
                  Shopping Cart
                </h2>
                {products.length > 0 && (
                  <span className="text-gray-600 mb-6 ">
                    {numOfCartItems} item in your cart
                  </span>
                )}
              </div>
              {products.length > 0 ? (
                products.map((product) => {
                  return <CartItem key={product._id} productInfo={product} />;
                })
              ) : (
                <div className="text-center py-10 space-y-4">
                  <p>
                    Your Cart is Empty{" "}
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      className="text-primary-600 ms-2"
                    />
                  </p>
                  <p>
                    You can continue Shopping from{" "}
                    <Link to={`/`} className="text-primary-600">
                      here
                    </Link>
                  </p>
                </div>
              )}
            </div>

            <div className="right col-span-12 lg:col-span-4 px-4 py-6 shadow-2xl bg-white rounded-lg self-start border-2 border-gray-200 ">
              <h2 className="text-2xl font-bold mb-3 text-black/80 ">
                Order Summary
              </h2>
              <ul className="*:flex *:items-center *:justify-between *:text-gray-600 space-y-3 border-b-2 mb-4 border-gray-500/50">
                <li>
                  <span>
                    Subtotal <span>({numOfCartItems} items)</span>
                  </span>
                  <span>{totalCartPrice} EGP</span>
                </li>
                <li>
                  <span>Shipping</span>
                  <span className="text-primary-600">
                    {products.length > 0 ? "70 EGP" : "0 EGP"}
                  </span>
                </li>
                <li className=" mb-4 ">
                  <span>Tax </span>
                  <span className="">
                    {Math.trunc(totalCartPrice * 0.14)} EGP
                  </span>
                </li>
              </ul>
              <div className="flex items-center justify-between font-bold ">
                <span className="text-black/80 ">Total </span>
                <span className="text-black/80">
                  {Math.trunc(totalCartPrice +(products.length >0 ? 70 : 0) + totalCartPrice * 0.14)} EGP
                </span>
              </div>
              <div className="flex  flex-col gap-3  *:hover:bg-primary-700 *:hover:text-white *:transition-colors *:duration-200 py-6 ">
                <button className="btn bg-primary-600 border text-white  border-gray-400/50">
                  <span>Proceed to checkout</span>
                </button>
                <button className="btn bg-transparent border border-gray-400/50  ">
                  <Link to={`/`}>
                    <span>Continue Shopping</span>
                  </Link>
                </button>
              </div>
              <div className="space-y-4">
                <div className="featuresCard flex items-center gap-3  px-4 py-3 rounded bg-gray-100 w-full lg:w-auto">
                  <span className="size-10 rounded-full bg-primary-400 flex justify-center items-center text-primary-800 shrink-0">
                    <FontAwesomeIcon icon={faTruck} className="text-xl" />
                  </span>
                  <div className="cardText">
                    <h2 className="font-semibold text-base">Free Delivery</h2>
                    <p className="text-gray-600 text-sm">
                      Your order qualifies for free delivery.Estimated
                      delivery.2-3 business days
                    </p>
                  </div>
                </div>

                <div className="featuresCard flex items-center gap-3 bg-primary-100 px-4 py-3 rounded  w-full lg:w-auto">
                  <span className="size-10 rounded-full bg-primary-400 flex justify-center items-center text-primary-800 shrink-0">
                    <FontAwesomeIcon
                      icon={faShieldHalved}
                      className="text-xl"
                    />
                  </span>
                  <div className="cardText">
                    <h2 className="font-semibold text-base">Secure Checkout</h2>
                    <p className="text-gray-600 text-sm">
                      Your payment information is protected with 256-bit SSL
                      encryption
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
