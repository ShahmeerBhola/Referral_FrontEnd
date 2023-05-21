import { Web3Button } from "@web3modal/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";
import { Porsche911 } from "../../assets/images";
import Minting from "../Minting/Minting";
import { Modal } from "../Modal/Modal";
import "./Refer.css";

function Refer() {
  const { address } = useAccount();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  function clickHandler() {
    setShow(true);
  }
  return (
    <>
      <Minting>
        <img className="camel" src={Porsche911} alt="Camel" />
        {address === undefined ? (
          <div className="my-web3-button">
            <Web3Button />
          </div>
        ) : (
          <button className="connect" onClick={() => navigate("/contract")}>
            <span>Mint</span>
          </button>
        )}
        {address && (
          <button className="refer" onClick={clickHandler}>
            <span>refer & earn</span>
          </button>
        )}
      </Minting>
      <Modal onClose={() => setShow(false)} show={show} />
    </>
  );
}

export default Refer;
