import logo from "./logo.svg";
//Import useState hook
import { useState } from "react";
import "./App.css";

function App() {
  //create two input fields
  const [prev, setprev] = useState(null);
  const [current, setCurrent] = useState(null);
  const [rate, setRate] = useState(null);
  const [totalBill, setTotalBill] = useState(0);
  const calculate = () => {
    //substract prev from current
    const result = current - prev;
    setTotalBill(result * rate);
  };
  return (
    <div className="App">
      <div className="header-container">
        <h2>Electricity Bill Calculator</h2>
      </div>
      <div>
        <input
          type="number"
          value={prev}
          className="input"
          placeholder="Previous Month Reading"
          onChange={(e) => setprev(e.target.value)}
        />
        <input
          type="number"
          value={current}
          className="input"
          placeholder="Current Month Reading"
          onChange={(e) => setCurrent(e.target.value)}
        />
      </div>
      <input
        type="number"
        value={rate}
        className="input"
        placeholder="Rate of Charge"
        onChange={(e) => setRate(e.target.value)}
      />

      <h3 className="total-bill">
        Your Total Bill is Rs.{Math.round(totalBill)}
      </h3>
      <button className="button" onClick={calculate}>
        Calculate
      </button>
    </div>
  );
}

export default App;
