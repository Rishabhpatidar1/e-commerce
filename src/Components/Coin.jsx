import React, { useContext } from "react";
import supercoin from "../Images/supercoin.png";
import { DataContext } from "../context/Dataprovider";

const Coin = () => {
  const { account, setAccount } = useContext(DataContext);
  return (
    <div className="coinmain">
      <div className="leftpart">
        <div className="textcontent">
          <h2>
            Elevate Your Rewards with SuperCoins: Where Value and Perks Converge
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            veritatis in, doloribus quidem iste odio commodi quidem iste odio
            commodi veritatis in, doloribus quidem iste odio commodi quidem iste
          </p>
        </div>
      </div>
      <div className="rightpart">
        <div className="thecard">
          <div className="thefront">
            {/* <img
              src="https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-blue-credit-card-for-financial-technology-banner-image_196331.jpg"
              alt=""
            /> */}
            <div className="firstrow">
              <h2> {account} </h2>
              <div className="coinname">
                <img src={supercoin} alt="" />
                <h2>supercoin</h2>
              </div>
            </div>
          </div>
          <div className="theback">
            <h2>backend</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
