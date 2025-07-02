import { Link } from "react-router";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../Services/Product-service";
import Loading from "../Loading/Loading";

export default function HomeDeals() {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchProducts() {
    try {
      setIsLoading(true);
      const response = await getAllProducts();
      console.log(response);

      if (response.success) {
        setProducts(response.data.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  const Deals = products
    .filter((product) => {
      return product.priceAfterDiscount;
    })
    .slice(0, 8);

  console.log(Deals);

  return (
    <>
      <section>
        <div className="container p-7">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-bold text-2xl mb-3">Deals of the day</h2>

              <div className="lg:flex items-center gap-2 ">
                <p>Offers ends in :</p>
                <div className="Counter flex gap-2">
                  <div className="size-7 text-sm bg-gray-900 text-white rounded-md flex justify-center items-center">
                    2
                  </div>
                  <span> : </span>
                  <div className="size-7 text-sm bg-gray-900 text-white rounded-md flex justify-center items-center">
                    30
                  </div>
                  <span> : </span>
                  <div className="size-7 text-sm bg-gray-900 text-white rounded-md flex justify-center items-center">
                    23
                  </div>
                </div>
              </div>
            </div>

            <Link className="text-primary-500" to={`/Deals`}>
              View all Deals
            </Link>
          </div>

          {!isLoading && Deals ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 py-6">
              {Deals.map((product) => {
                return <Card productDetails={product} key={product.id} />;
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
