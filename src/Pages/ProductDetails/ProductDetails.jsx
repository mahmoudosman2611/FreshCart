import { useEffect, useState } from "react";
import ProductDetailsTabs from "../../Components/ProductDetailsTabs/ProductDetailsTabs";
import ProductInfo from "../../Components/ProductInfo/ProductInfo";
import RelatedProducts from "../../Components/RelatedProducts/RelatedProducts";
import { getProductById } from "../../Services/Product-service";
import { useParams } from "react-router";
import Loading from "../../Components/Loading/Loading";
import PageMetaData from "../../Components/PageMetaData/PageMetaData";
import ProductDetailsSkeleton from "../../Components/Skeleton/ProductDetailsSkeleton";

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
  }, [id]);

  if (isLoading) {
    return <ProductDetailsSkeleton/>;
  }

  return (
    <>

      <PageMetaData
        title={productDetails.title}
        description={productDetails.description}
      />
      <ProductInfo productDetails={productDetails} />

      <RelatedProducts productDetails={productDetails} />
    </>
  );
}

export default ProductDetails;
