import Hero from "./Hero";
import NewCollections from "./NewCollections";
import Offers from "./Offers";
import Popular from "./Popular";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
    </div>
  );
};

export default Shop;
