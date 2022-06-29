import React, { useState } from "react"
import { toke } from "../../../declarations/token"
import { token } from "../../../declarations/token/index";

function Faucet() {

  const [isDisabled, setDisable] = useState(false); 
  const [buttonText, setText] = useState("Gimme plz!")

  async function handleClick(event) {
    setDisable(true);
    const result = await token.payOut();
    setText(result);
    // setDisable(false);
  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>Get your free Segenie tokens here! Claim 10,000 SEGEN coins to your account.</label>
      <p className="trade-buttons">
        <button id="btn-payout" onClick={handleClick} disabled={isDisabled}>
          {buttonText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
