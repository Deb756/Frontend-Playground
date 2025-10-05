import React, { useId } from "react";

function InputField({
  label,
  amount,
  onAmountChange,
  currencyOptions = [],
  onCurrencyChange,
  selectCurrency = "usd",
}) {
  // useId() hook used to generate unique id
  const amtInputId = useId();
  return (
    <div className="flex flex-col align-middle rounded-md p-3 justify-center bg-black text-white">
      <p>{label || "From"}</p>
      <div className="flex gap-30 pb-3 pt-3 pl-2 pr-2 align-middle justify-between">
        <input
          className="rounded-md outline-none"
          type="number"
          placeholder="Enter number"
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
        <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          id="currency"
          className="outline-none bg-black rounded-md cursor-pointer"
        >
          {currencyOptions.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputField;
