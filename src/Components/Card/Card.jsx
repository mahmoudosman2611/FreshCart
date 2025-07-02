import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faCodeCompare,
  faPlus,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { calculateDiscountPercentage } from "../../Utils/CalcDiscount";

export default function Card({ productDetails }) {
  const {
    imageCover,
    priceAfterDiscount,
    price,
    ratingsAverage,
    title,
    ratingsQuantity,
    category,
  } = productDetails;

  const Discount = calculateDiscountPercentage(price, priceAfterDiscount);
  return (
    <>
      <div className="card group rounded-xl shadow-xl overflow-hidden relative">
        <div>
          <img src={imageCover} alt="" className="lg:h-60 h-90 mx-auto" />
        </div>
        <div className="cardContent p-4 space-y-3">
          <div>
            <span className="text-sm text-gray-500">{category.name}</span>
            <h2 className="font-semibold line-clamp-2">{title}</h2>
          </div>
          <div className="rating flex gap-2 items-center">
            <div className="stars text-yellow-500">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <span>{ratingsAverage}</span>
            <span>({ratingsQuantity})</span>
          </div>
          <div className="price flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg text-primary-600">
                {priceAfterDiscount}
              </span>
              <del className="text-gray-500">{price}EGP</del>
            </div>
            <button className="btn bg-primary-500 text-white p-0 size-8  rounded-full hover:bg-primary-700 ">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <div className="actions absolute top-4 -right-100  group-hover:right-2 transition-[right] duration-300 flex flex-col gap-2 text-gray-500 *:hover:text-primary-500 *:transition-colors *:duration-200 ">
            <button>
              <FontAwesomeIcon icon={faHeart} />
            </button>
            <button>
              <FontAwesomeIcon icon={faCodeCompare} />
            </button>
            <button>
              <FontAwesomeIcon icon={faEye} />
            </button>
          </div>
          <div className="badge absolute left-3 top-4 bg-red-500 text-sm text-white rounded-md px-2 py-1">
            <span>{Discount}%</span>
          </div>
        </div>
      </div>
    </>
  );
}
