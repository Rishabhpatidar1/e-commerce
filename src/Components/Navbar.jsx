import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Images/logo.png";
import superCoin from "../Images/supercoin.png";
import { DataContext } from "../context/Dataprovider";

const Navbar = () => {
  const navigate = useNavigate();
  const { account, setAccount } = useContext(DataContext);

  const logoutUser = () => {
    setAccount("");
  };

  return (
    <div className="navbar">
      <div className="leftnav">
        <img
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
          src={Logo}
          alt=""
        />
        <input
          id="input"
          type="text"
          placeholder="Search for Products and More"
        />
        <i class="ri-search-line"></i>
      </div>
      <div className="rightnav">
        <div onClick={() => navigate("/cart")} className="cart">
          <i class="ri-shopping-cart-2-line"></i>
          <p>cart</p>
        </div>
        <div onClick={() => navigate("/supercoin")} className="coin">
          <img src={superCoin} alt="" />
          <p>superCoin</p>
        </div>
        {account ? (
          <h2 id="loggedinUser"> {account} </h2>
        ) : (
          <button onClick={() => navigate("/login")} className="login">
            <i class="ri-user-fill"></i> login
          </button>
        )}
        {!account ? <i class="ri-menu-line"></i> : ""}
        {account ? (
          <button
            onClick={() => {
              logoutUser();
            }}
            className="logout"
          >
            <i class="ri-logout-circle-r-line"></i> logout
          </button>
        ) : (
          ""
          // <h2> {account} </h2>
        )}
      </div>
    </div>
  );
};

export default Navbar;
