import {} from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import "react-image-gallery/styles/css/image-gallery.css";
import {
  faCartShopping,
  faMinus,
  faPlus,
  faRotateRight,
  faShareNodes,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "../Rating/Rating";
import { calculateDiscountPercentage } from "../../Utils/CalcDiscount";
import ReactImageGallery from "react-image-gallery";

export default function ProductInfo({ productDetails }) {
  console.log(productDetails);

  const {
    price,
    description,
    quantity,
    id,
    category,
    images,
    title,
    priceAfterDiscount,
    ratingsQuantity,
    ratingsAverage,
  } = productDetails;
  return (
    <>
      <section>
        <div className="container">
          <div className="grid grid-cols-12 gap-4 gap-y-6 py-6">
            <div className="left col-span-12 lg:col-span-4 p-4">
              <ReactImageGallery
              showNav = {false}
              showPlayButton = {false}
              showFullscreenButton = {false}
                items={images.map((image) => {
                  return {
                    original: image,
                    thumbnail: image,
                  };
                })}
              />
              {/* <img
                src="https://ecommerce.routemisr.com/Route-Academy-products/1680403397402-cover.jpeg"
                alt="product"
                className="w-full"
              /> */}
            </div>

            <div className="right col-span-12 lg:col-span-8 p-4 shadow-xl rounded-lg">
              <div className="flex items-center justify-between">
                <span
                  className={`p-1 text-sm ${
                    quantity > 0
                      ? "bg-primary-300 text-primary-500 "
                      : "bg-red-300 text-red-500"
                  } rounded-md`}
                >
                  {quantity > 0 ? "In Stock" : "Out of Stock"}
                </span>
                <div className="productIcon space-x-2 text-gray-600">
                  <FontAwesomeIcon icon={faShareNodes} />
                  <FontAwesomeIcon icon={faHeart} />
                </div>
              </div>
              <div className="space-y-2">
                <h1 className=" mt-6 text-2xl font-bold">{title}</h1>
                <div className="rating flex gap-2 items-center">
                  <Rating rating={ratingsAverage} />
                  <span>{ratingsAverage}</span>
                  <span>({ratingsQuantity} Reviews)</span>
                </div>
                <div className="space-x-3">
                  <span className="font-bold text-xl mb-4 ">
                    {priceAfterDiscount || price} EGP
                  </span>
                  {priceAfterDiscount ? (
                    <>
                      <del className="text-gray-600">{price} EGP</del>

                      <span className="bg-red-400 p-1 rounded-md text-white">
                        save{" "}
                        {calculateDiscountPercentage(price, priceAfterDiscount)}
                        %
                      </span>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className="border-y-2 border-gray-300/50 space-y-6 ">
                <p className="mt-6">{description}</p>
                <div className="lg:flex  lg:flex-row flex flex-col gap-4  items-center lg:gap-6 ">
                  <span>Quantity</span>
                  <div className="flex  items-center  gap-7 p-2 border-2 border-gray-400/80 rounded-md">
                    <FontAwesomeIcon
                      icon={faMinus}
                      className="cursor-pointer"
                    />
                    <span>1</span>
                    <FontAwesomeIcon icon={faPlus} className="cursor-pointer" />
                  </div>
                  <span className="">only {quantity} item in stock</span>
                </div>
                <div className="lg:flex  lg:flex-row flex flex-col gap-3 *:flex *:w-full *:justify-center *:gap-2 *:items-center lg:gap-4  *:hover:bg-red-700 mb-6 ">
                  <button className="btn bg-red-600 border text-white  border-gray-400/50">
                    <FontAwesomeIcon icon={faCartShopping} />
                    <span>Remove From Cart</span>
                  </button>
                  <button className="btn bg-transparent border border-gray-400/50 hover:text-white">
                    <span>Buy Now</span>
                  </button>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between py-6">
                <div className="featuresCard flex items-center gap-3 bg-white px-4 py-3 rounded shadow-sm w-full lg:w-auto">
                  <span className="size-10 rounded-full bg-primary-400 flex justify-center items-center text-primary-800 shrink-0">
                    <FontAwesomeIcon icon={faTruck} className="text-xl" />
                  </span>
                  <div className="cardText">
                    <h2 className="font-semibold text-base">Free Delivery</h2>
                    <p className="text-gray-600 text-sm">Orders $50 or more</p>
                  </div>
                </div>

                <div className="featuresCard flex items-center gap-3 bg-white px-4 py-3 rounded shadow-sm w-full lg:w-auto">
                  <span className="size-10 rounded-full bg-primary-400 flex justify-center items-center text-primary-800 shrink-0">
                    <FontAwesomeIcon icon={faRotateRight} className="text-xl" />
                  </span>
                  <div className="cardText">
                    <h2 className="font-semibold text-base">30 Days Return</h2>
                    <p className="text-gray-600 text-sm">
                      Satisfaction guaranteed
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
