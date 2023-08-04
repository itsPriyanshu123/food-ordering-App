
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("main"));

const AppLayout = () => {
  return (
    <div className="header">
      <div className="logo">
        <img  src="https://i.pinimg.com/236x/ab/2e/ae/ab2eae37c948188c10620b103da5ed20.jpg"/>
      </div>
      <ul className="list_items">
        <li>Home</li>
        <li>About</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

root.render(<AppLayout/>);
