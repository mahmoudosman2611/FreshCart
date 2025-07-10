import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import Rating from "../Rating/Rating";
import { CartContext } from "../../Context/Cart.context";

export default function CartItem({ productInfo }) {
  if (!productInfo || !productInfo.product) return null;

  const { count, price, product } = productInfo;
  const { id } = product;

  const { handelRemoveItem } = useContext(CartContext);

  return (
    <div className="cartItem py-6 grid grid-cols-12 gap-4 gap-y-6 ">
      <div className="left col-span-12 md:col-span-6 p-4">
        <div className="flex items-center justify-between gap-4">
          <div className="cartImg shrink-0">
            <img
              src={product.imageCover}
              alt={product.title || "Product Image"}
              className="w-20 rounded-2xl shrink-0"
            />
          </div>
          <div className="cartDetails">
            <h3 className="text-base font-semibold text-black line-clamp-2">
              {product.title || "Unnamed Product"}
            </h3>
            <h4 className="text-gray-600">
              {product.category?.name || "No Category"}
            </h4>
            <div className="flex items-center gap-4">
              <Rating rating={product.ratingsAverage || 0} />
              <span className="text-gray-600">
                {product.ratingsAverage || "0.0"}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-12 md:col-span-6 px-4 flex justify-between items-center py-6">
        <div className="flex items-center rounded-lg overflow-hidden border border-gray-300 w-fit">
          <button className="w-10 h-10 flex justify-center items-center hover:bg-gray-100 text-gray-700">
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span className="min-w-[48px] h-10 flex items-center justify-center border-x border-gray-300 select-none text-center">
            {count || 1}
          </span>
          <button className="w-10 h-10 flex justify-center items-center hover:bg-gray-100 text-gray-700">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>

        <div className="flex items-center gap-2 whitespace-nowrap">
          <span>{price || 0} EGP</span>
        </div>

        <button
          onClick={() => {
            handelRemoveItem({ id });
          }}
        >
          <FontAwesomeIcon
            icon={faTrash}
            className="text-red-600 cursor-pointer"
          />
        </button>
      </div>
    </div>
  );
}
