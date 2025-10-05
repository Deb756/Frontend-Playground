import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InputField from "./InputField";
import useCurrencyInfo from "./useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmt, setConvertedAmt] = useState("");

  // custom hook
  const currencyInfo = useCurrencyInfo(from);
  // to get all the keys from object of currencyInfo
  const options = Object.keys(currencyInfo);
  // functionality of swap button
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmt(amount);
    setAmount(convertedAmt);
  };

  // converting currency
  const convert = () => {
    setConvertedAmt(amount * currencyInfo[to]);
  };

  return (
    <>
      <div className="bg-gray-800 text-2xl gap-2 flex flex-col m-50 rounded-md w-fit mx-auto align-middle justify-center text-white p-5">
        <InputField
          label={"from"}
          amount={amount}
          onAmountChange={setAmount}
          currencyOptions={options}
          onCurrencyChange={(currency) => setFrom(currency)}
          selectCurrency={from}
        />
        <InputField
          label={"to"}
          amount={convertedAmt}
          onAmountChange={setConvertedAmt}
          currencyOptions={options}
          onCurrencyChange={(currency) => setTo(currency)}
          selectCurrency={to}
        />
        <div className="flex justify-between gap-2">
          <button
            onClick={convert}
            className="rounded-md bg-green-500 w-full text-black p-2 text-1xl active:scale-95 transition duration-100 cursor-pointer"
          >
            Convert
          </button>
          <button
            onClick={swap}
            className="rounded-md bg-green-500 w-full text-black p-2 text-1xl active:scale-95 transition duration-100 cursor-pointer"
          >
            Swap
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
