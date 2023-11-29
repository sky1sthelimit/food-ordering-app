import React from "react";
import ReactDOM from "react-dom/client";

const Logo = () => {
  return (
    <img
      className="logo"
      src="https://logo.com/image-cdn/images/kts928pd/production/11e5681ac3b77c52480a1748abb1950ba40e4884-357x358.png?w=1080&q=72"
    ></img>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <Logo />
      </div>

      <div className="nav-items-container">
        <ul className="nav-items">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

//body and its components

const restaurants = [
  {
    info: {
      id: "93110",
      name: "Rajkumar Delite Original (Durga Plaza)",
      cloudinaryImageId: "hwoi4pyewupobthpazth",
      locality: "Dhanwantri Marg",
      areaName: "Madhav Nagar",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian", "Thalis", "Snacks", "Indian"],
      avgRating: 4.1,
      veg: true,
      feeDetails: {
        restaurantId: "93110",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 1300,
      },
      parentId: "165710",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "22 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-21 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "FREE ITEM",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-ca51fa94-d6d1-4c35-ab77-08ffa55ef5bf",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/rajkumar-delite-original-durga-plaza-dhanwantri-marg-madhav-nagar-ujjain-93110",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

const ResCard = (props) => {
  let { restaurant } = props;
  let value = restaurant.info;
  let source =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
    value.cloudinaryImageId;
  return (
    <div className="res-card">
      <img className="res-image" alt="res-logo" src={source}></img>

      <h3 className="res-name">{value.name}</h3>
      <h3 className="res-extra-info">
        **{value.avgRatingString} || <span>{value.sla.deliveryTime} mins</span>
      </h3>
      <h3 className="res-cuisines">{value.cuisines.join(", ")}</h3>
      <h3 className="res-areaName">{value.areaName}</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="searchBar">Search</div>
      <div className="res-cards-container">
        <ResCard restaurant={restaurants[0]} />
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

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
