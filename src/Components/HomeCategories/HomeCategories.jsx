import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext  } from "react";
import { Link } from "react-router";
import Loading from "../Loading/Loading";

import { CategoriesContext } from "../../Context/Categories.context";

export default function HomeCategories() {
  const { isLoading, categories, isError, error } = useContext(CategoriesContext);

    if (isLoading) {
      return <Loading />;
    }
  

  return (
    <>
      <section className="px-2 py-4">
        <div className="container">
          <div className="flex items-center justify-between">
            <h2 className="lg:text-2xl text-base font-bold text-gray-600">
              Shop By Categories
            </h2>
            <Link
              className="text-primary-600 font-semibold flex items-center gap-2"
              to={`/Categories`}
            >
              <span>View All Categories</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
          {!isLoading && categories ? (
            <div className="grid xl:grid-cols-6 grid-cols-2 py-8 gap-6 ">
              {categories.map((category) => {
                return (
                  <Link
                    key={category._id}
                    to={`Category/${category._id}`}
                    className="card hover:scale-105 transition-all  flex flex-col items-center justify-between gap-2 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl duration-300 cursor-pointer"
                  >
                    <img
                      src={category.image}
                      alt=""
                      className="size-16 rounded-full object-cover"
                    />
                    <h3 className=" font-semibold text-gray-600 ">
                      {category.name}
                    </h3>
                  </Link>
                );
              })}
            </div>
          ) : (
            <Loading />
          )}
        </div>
      </section>
    </>
  );
}
