import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../Services/Product-service";
import Loading from "../Loading/Loading";
import Card from "../Card/Card";

export default function HomeFeaturedProducts() {
  const [featuredProducts, setFeaturedProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  async function getFeaturedProducts() {
    try {
      setIsLoading(true);
      const response = await getAllProducts();
      if (response.success) {
        setIsLoading(false);
        setFeaturedProducts(response.data.data);
      }
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getFeaturedProducts();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <div className="text-center text-red-500 py-10">
        <p>⚠️ Failed to load featured products.</p>
        <p>Please try again later.</p>
      </div>
    );
  }

  return (
    <>
      <section>
        <div className="container py-6">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {featuredProducts.map((product) => {
              return <Card key={product.id} productDetails={product} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
