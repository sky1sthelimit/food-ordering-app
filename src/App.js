import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

//body and its components

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
