import MenuItem from "@/components/MenuItem/MenuItem";
import RestaurantHeader from "@/components/RestaurantHeader/RestaurantHeader";
import restaurantsData from "@/data/restaurants.json";
import Image from "next/image";
import NotFound from "@/components/NotFound/NotFound";

export default function RestaurantPage({ params }) {
  const { slug } = params;
  const restaurant = restaurantsData.restaurants.find((r) => r.slug === slug);

  if (!restaurant) {
    return <NotFound />;
  }

  const { menu, image, name } = restaurant;

  return (
    <div>
      {/* Hero Image */}
      <div className="heroImage">
        <Image
          src={image}
          alt={name}
          fill
          className="image"
          priority
          sizes="100vw"
        />
      </div>

      <div className="mainWrapper">
        <div className="contentWrapper">
          <div className="restaurantHeaderRow">
            <RestaurantHeader name={name} />
          </div>

          {/* Menu Sections */}
          <div className="menu">
            {/* Entrées */}
            <div>
              <div className="sectionTitle">Entrées</div>
              {menu.entrées &&
                menu.entrées.map((item, idx) => (
                  <MenuItem key={`entree-${idx}`} item={item} index={idx} />
                ))}
            </div>
            {/* Plats */}
            <div>
              <div className="sectionTitle">Plats</div>
              {menu.plats &&
                menu.plats.map((item, idx) => (
                  <MenuItem key={`plat-${idx}`} item={item} index={idx} />
                ))}
            </div>
            {/* Desserts */}
            <div>
              <div className="sectionTitle">Desserts</div>
              {menu.desserts &&
                menu.desserts.map((item, idx) => (
                  <MenuItem key={`dessert-${idx}`} item={item} index={idx} />
                ))}
            </div>
          </div>

          {/* Commander Button */}
          <button className="orderButton">Commander</button>
        </div>
      </div>
    </div>
  );
}
