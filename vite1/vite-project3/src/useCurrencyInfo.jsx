import React, { useCallback, useEffect, useState } from "react";

// custom hook
function useCurrencyInfo(currency) {
  const [resp, setResp] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setResp(res[currency]));
    console.log(resp);
  }, [currency]);

  return resp;
}

export default useCurrencyInfo;
