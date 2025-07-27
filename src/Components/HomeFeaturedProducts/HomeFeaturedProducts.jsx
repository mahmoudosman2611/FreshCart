import React, { useContext } from "react";

import Loading from "../Loading/Loading";
import Card from "../Card/Card";
import { productsContext } from "../../Context/Products.context";
import HomeFeaturedProductSkeleton from "../Skeleton/HomeFeaturedProductSkeleton";

export default function HomeFeaturedProducts() {
  const { isLoading, products, isError, error } = useContext(productsContext);

  if (isLoading) {
    return <HomeFeaturedProductSkeleton />;
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
      <section id="FeaturedProducts">
        <div className="container py-6">
          <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {products.map((product) => {
              return <Card key={product.id} productDetails={product} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
