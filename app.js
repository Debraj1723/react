import React from "react";
import ReactDOM from "react-dom/client";

let restaurants = [
  {
    id: "1",
    name: "Spicy Bites",
    cuisine: ["Indian", "Chinese"],
    rating: 4.5,
    delivery_time: "30 mins",
    price_for_two: 500,
    distance: "2.5 km",
    discount: "20% off",
    image_url:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/d0fc03a3-02d7-45b4-b733-4de64d19d3a9_651011.jpg",
    tags: ["Veg", "Popular"],
    is_open: true,
  },
  {
    id: "2",
    name: "Pizza Haven",
    cuisine: ["Italian", "Fast Food"],
    rating: 4.2,
    delivery_time: "25 mins",
    price_for_two: 700,
    distance: "1.8 km",
    discount: "Buy 1 Get 1 Free",
    image_url:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/jaj2dspo6b2pfvflxiap",
    tags: ["Non-Veg", "Trending"],
    is_open: true,
  },
  {
    id: "3",
    name: "Green Leaf Café",
    cuisine: ["Healthy", "Salads"],
    rating: 4.8,
    delivery_time: "40 mins",
    price_for_two: 600,
    distance: "3.2 km",
    discount: null,
    image_url:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/18/25e04f02-674c-403d-ac89-ae0dde7443e9_13033.jpg",
    tags: ["Veg", "Organic"],
    is_open: false,
  },
  {
    id: "4",
    name: "Royal Mughlai",
    cuisine: ["Mughlai", "North Indian"],
    rating: 4.0,
    delivery_time: "35 mins",
    price_for_two: 800,
    distance: "4.0 km",
    discount: "15% off",
    image_url:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bedbbaa7543c3d70d7a01b02046ee86e",
    tags: ["Non-Veg", "Spicy"],
    is_open: true,
  },
  {
    id: "5",
    name: "Biryani Junction",
    cuisine: ["Indian", "Biryani"],
    rating: 4.6,
    delivery_time: "20 mins",
    price_for_two: 550,
    distance: "1.2 km",
    discount: "30% off",
    image_url:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/q6zhec9iilrnyxwpcfoa",
    tags: ["Non-Veg", "Family Favorite"],
    is_open: true,
  },
  {
    id: "6",
    name: "Tandoori Flames",
    cuisine: ["Indian", "Tandoor"],
    rating: 4.3,
    delivery_time: "28 mins",
    price_for_two: 650,
    distance: "2.0 km",
    discount: "10% off",
    image_url:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/d0fc03a3-02d7-45b4-b733-4de64d19d3a9_651011.jpg",
    tags: ["Non-Veg", "Grilled"],
    is_open: true,
  },
  {
    id: "7",
    name: "Pasta Mania",
    cuisine: ["Italian", "Continental"],
    rating: 4.1,
    delivery_time: "22 mins",
    price_for_two: 600,
    distance: "1.5 km",
    discount: null,
    image_url:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/jaj2dspo6b2pfvflxiap",
    tags: ["Veg", "Cheesy"],
    is_open: true,
  },
  {
    id: "8",
    name: "Soup & Salad Bar",
    cuisine: ["Healthy", "Salads"],
    rating: 4.7,
    delivery_time: "38 mins",
    price_for_two: 500,
    distance: "3.5 km",
    discount: null,
    image_url:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/18/25e04f02-674c-403d-ac89-ae0dde7443e9_13033.jpg",
    tags: ["Veg", "Healthy Choice"],
    is_open: false,
  },
  {
    id: "9",
    name: "Kebab Korner",
    cuisine: ["Mughlai", "Barbecue"],
    rating: 4.4,
    delivery_time: "32 mins",
    price_for_two: 750,
    distance: "2.8 km",
    discount: "25% off",
    image_url:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bedbbaa7543c3d70d7a01b02046ee86e",
    tags: ["Non-Veg", "Grilled"],
    is_open: true,
  },
  {
    id: "10",
    name: "Wrap & Roll",
    cuisine: ["Fast Food", "Wraps"],
    rating: 4.2,
    delivery_time: "18 mins",
    price_for_two: 400,
    distance: "1.0 km",
    discount: "10% off",
    image_url:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/q6zhec9iilrnyxwpcfoa",
    tags: ["Veg", "Quick Bites"],
    is_open: true,
  },
  {
    id: "11",
    name: "Dessert Delights",
    cuisine: ["Desserts", "Bakery"],
    rating: 4.5,
    delivery_time: "15 mins",
    price_for_two: 300,
    distance: "0.8 km",
    discount: "20% off",
    image_url:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/d0fc03a3-02d7-45b4-b733-4de64d19d3a9_651011.jpg",
    tags: ["Veg", "Sweet Treats"],
    is_open: true,
  },
  {
    id: "12",
    name: "Sushi Stop",
    cuisine: ["Japanese", "Sushi"],
    rating: 4.9,
    delivery_time: "45 mins",
    price_for_two: 1200,
    distance: "5.0 km",
    discount: "10% off",
    image_url:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bedbbaa7543c3d70d7a01b02046ee86e",
    tags: ["Non-Veg", "Authentic"],
    is_open: true,
  },
  {
    id: "13",
    name: "Chaat & More",
    cuisine: ["Street Food", "Indian"],
    rating: 4.0,
    delivery_time: "20 mins",
    price_for_two: 250,
    distance: "1.3 km",
    discount: null,
    image_url:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/q6zhec9iilrnyxwpcfoa",
    tags: ["Veg", "Spicy"],
    is_open: true,
  },
  {
    id: "14",
    name: "Burger Blast",
    cuisine: ["Fast Food", "American"],
    rating: 4.3,
    delivery_time: "25 mins",
    price_for_two: 500,
    distance: "1.7 km",
    discount: "Buy 1 Get 1 Free",
    image_url:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/jaj2dspo6b2pfvflxiap",
    tags: ["Non-Veg", "Cheesy"],
    is_open: true,
  },
  {
    id: "15",
    name: "Bistro Beans",
    cuisine: ["Cafe", "Continental"],
    rating: 4.6,
    delivery_time: "35 mins",
    price_for_two: 700,
    distance: "2.5 km",
    discount: null,
    image_url:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/18/25e04f02-674c-403d-ac89-ae0dde7443e9_13033.jpg",
    tags: ["Veg", "Cozy"],
    is_open: false,
  },
];
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn-icons-png.flaticon.com/128/3063/3063822.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({ data }) => {
  const { image_url, name, cuisine, rating, price_for_two, delivery_time } =
    data;
  return (
    <div className="res-card">
      <div
        className="imageHolder"
        style={{ backgroundImage: `url(${image_url})` }}
      ></div>
      <div className="contentArea">
      <h4 className="res-name">{name}</h4>
      <div className="rating">
        <img src="https://cdn-icons-png.flaticon.com/128/16171/16171325.png" />
        <p>{rating} . {delivery_time}</p>
      </div>
      <p className="cuisines">{cuisine.join(", ")}</p>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="searchContainer">
        <input placeholder="search . . ." />
      </div>
      <div className="res-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} data={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
