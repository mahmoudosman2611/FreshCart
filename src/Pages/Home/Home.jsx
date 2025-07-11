import HomeCategories from "../../Components/HomeCategories/HomeCategories";
import HomeDeals from "../../Components/HomeDeals/HomeDeals";
import HomeFeaturedProducts from "../../Components/HomeFeaturedProducts/HomeFeaturedProducts";
import HomeFeatures from "../../Components/HomeFeatures/HomeFeatures";
import HomeSlider from "../../Components/HomeSlider/HomeSlider";

export default function Home() {
  return (
    <>
      <HomeSlider />
      <HomeFeatures />
      <HomeCategories />
      <HomeDeals />
      <HomeFeaturedProducts />
    </>
  );
}
