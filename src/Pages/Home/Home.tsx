import React from "react";
import { useNavigate } from "react-router-dom";

import "./Home.scss";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div onClick={() => navigate("/register")} className="button">
        Process Registration
      </div>
      <div onClick={() => navigate("/productlist")} className="button">
        Product List
      </div>
    </div>
  );
};

export default Home;
