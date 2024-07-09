import Hero from "./Hero";
import NewCollections from "./NewCollections";
import NewsNetter from "./NewsNetter";
import Offers from "./Offers";
import Popular from "./Popular";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsNetter />
    </div>
  );
};

export default Shop;
