import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/back6.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <div className="textWrapper">
          <h1> 이차돌 </h1>
          <p> 차돌박이 전문점 </p>
        </div>
        <Link to="/menu">
          <button>지금 주문하세요 </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
