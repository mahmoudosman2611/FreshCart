import { useEffect, useState } from "react";
import ProductDetailsTabs from "../../Components/ProductDetailsTabs/ProductDetailsTabs";
import ProductInfo from "../../Components/ProductInfo/ProductInfo";
import RelatedProducts from "../../Components/RelatedProducts/RelatedProducts";
import { getProductById } from "../../Services/Product-service";
import { useParams } from "react-router";
import Loading from "../../Components/Loading/Loading";

export function ProductDetails() {
  const [productDetails, setProductDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { id } = useParams();
  async function fetchProductDetails() {
    try {
      setIsLoading(true);
      const response = await getProductById({ id });
      if (response.success) {
        setProductDetails(response.data.data);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  }
  useEffect(() => {
    fetchProductDetails();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <ProductInfo productDetails={productDetails} />
      {/* <ProductDetailsTabs />
      <RelatedProducts /> */}
    </>
  );
}

export default ProductDetails;
