import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { getAllCategories } from "../../Services/Categories-service";
import Loading from "../Loading/Loading";

export default function HomeCategories() {
  const [categories, setCategories] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchCategories() {
    try {
      setIsLoading(true);
      const response = await getAllCategories();

      if (response.success) {
        setCategories(response.data.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

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
                    
                  <div className="card flex flex-col items-center justify-between gap-2 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                    <img
                      src={category.image}
                      alt=""
                      className="size-16 rounded-full object-cover"
                    />
                    <h3 className=" font-semibold text-gray-600 ">
                      {category.name}
                    </h3>
                  </div>
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
