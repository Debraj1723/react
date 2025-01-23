import React from "react";
import ReactDOM from "react-dom/client";

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

const RestaurantCard = (props) => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img src="https://imgs.search.brave.com/fNFN05hZTkTm2daAzXVds3CSha8BlBivoDLfhMJRoXU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM0/ODc3MzY4My9waG90/by9pbmRpYW4tZm9v/ZC1jaGlja2VuLWJp/cml5YW5pLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz0xSGpn/SThOS0paNzZqRllm/RHJVLUtubldlWW5q/Y2w1SHZVTnZfeGhL/MjV3PQ" />
      <h3>{props.name}</h3>
      <h4>{props.address}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="searchContainer">
        <input placeholder="" />
      </div>
      <div className="res-container">
        <RestaurantCard
          name="Meghna foods"
          address="11/21 Bashonti Chatterjee lane"
        />
        <RestaurantCard
          name="KFC restaurant"
          address="11/21 Bashonti Chatterjee lane"
        />
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
