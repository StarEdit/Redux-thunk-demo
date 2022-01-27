import React, { useState } from "react";
import "../App.css";

import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { bankActionCreators, State } from "../redux/store";

const BankPage = () => {
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(
    bankActionCreators,
    dispatch
  );

  const money = useSelector((state: State) => state.bank);

  const [inputMoney, setInputMoney] = useState<number>(0);

  const handleChangeInput = (e: any) => {
    setInputMoney(parseInt(e.target.value));
  };

  return (
    <div className="App">
      <h1>{money}</h1>
      <input type="text" value={inputMoney} onChange={handleChangeInput} />
      <br />
      <br />
      <button onClick={() => depositMoney(inputMoney)}>DEPOSIT</button>
      <button onClick={() => withdrawMoney(inputMoney)}>WITHDRAW</button>
      <button onClick={() => bankrupt()}>BANKRUPT</button>
    </div>
  );
};

export default BankPage;
