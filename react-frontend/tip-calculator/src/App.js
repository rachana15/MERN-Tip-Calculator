import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [amount, setAmount] = useState("");
  const [percent, setPercent] = useState("");
  const [tip, setTip] = useState("");

  const calculateTip = e => {
    const url = "http://localhost:9000/api/v1/calculatetip";
    e.preventDefault();
    const data = {
      amount: amount,
      tip: percent
    };
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data.toBePayed);
        setTip(data.toBePayed);
      });
  };

  return (
    <div className="App">
      <div className="app_container">
        <div className="app_title">
          <h2> Tip Calculator </h2>
        </div>
        <div className="app_content">
          <input
            placeholder="Bill"
            type="text"
            value={amount}
            onChange={e => setAmount(e.target.value)}
          ></input>
          <input
            placeholder="Tip Percentage"
            type="text"
            value={percent}
            onChange={e => setPercent(e.target.value)}
          ></input>
          <button onClick={calculateTip}>Calculate Tip</button>
        </div>

        <div className="app_tip">
          You are Paying :<strong> {tip} </strong>{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
