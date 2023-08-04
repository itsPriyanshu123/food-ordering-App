import React from "react";
import ReactDOM from "react-dom/client";
import logoImage from "/common/logo.jpg";
import Dishlogo from './common/foodDish1.jpg';
const root = ReactDOM.createRoot(document.getElementById("main"));

const Header=()=>{
  return (
    <div className="header">
    <div>
      <img className="logo" src={logoImage} />
    </div>
    <ul className="list_items">
      <li>Home</li>
      <li>About</li>
      <li>Cart</li>
    </ul>
  </div>
  )
}

const ResturantCard=()=>{
  return(
    <div className="card">
      <img className="image_class" src={Dishlogo} alt='dish-logo'/>
      <div className="card_content">
      <h3>Netram</h3>
      <h4>4.6⭐</h4>
      <p>Indian,South Indian,Asian,Chienese,Thai</p>
      <p>Gomati Nagar</p>
      </div>
    </div>
  )
}

const Body = () => {
  return (
    <div className="main_body">
      <div className="search">Search</div>
      <div className="res-container">
        <ResturantCard/>
        <ResturantCard/>
        <ResturantCard/>
        <ResturantCard/>
        <ResturantCard/>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
  <Header/>
  <Body/>
  </div>
  );
};

root.render(<AppLayout />);
