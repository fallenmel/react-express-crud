import React from "react";
import { cyan, pink, purple, orange } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import { AddShoppingCart, ThumbUp, Assessment, Face } from "@material-ui/icons";

const data = {
  recentProducts: [
    {
      id: 1,
      title: "Samsung TV",
      text: "Samsung 32 1080p 60Hz LED Smart HDTV."
    },
    { id: 2, title: "Playstation 4", text: "PlayStation 3 500 GB System" },
    {
      id: 3,
      title: "Apple iPhone 6",
      text: "Apple iPhone 6 Plus 16GB Factory Unlocked GSM 4G "
    },
    {
      id: 4,
      title: "Apple MacBook",
      text: "Apple MacBook Pro MD101LL/A 13.3-Inch Laptop"
    }
  ]
};

const Dashboard = () => {
  return (
    <div>
      <h2 style={{ paddingBottom: "15px" }}>Dashboard</h2>
    </div>
  );
};

export default Dashboard;
