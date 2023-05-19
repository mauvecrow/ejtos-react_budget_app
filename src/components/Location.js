import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default Location = () => {
  const { dispatch, currency } = useContext(AppContext);

  const changeLocation = (val) => {
    console.log("Location Val: " + val);
    dispatch({
      type: "CHG_CURRENCY",
      payload: val,
    });
  };

  const currencyTxt = (cx) => {
    switch (cx.currency) {
      case "$":
        return "$ Dollar";
      case "£":
        return "£ Pound";
      case "€":
        return "€ Euro";
      case "₹":
        return "₹ Ruppee";
    }
  };

  return (
    <div className="alert alert-success">
      Currency {currencyTxt({ currency })}
      {
        <select
          name="Location"
          id="Location"
          className="alert alert-success"
          onChange={(event) => changeLocation(event.target.value)}
        >
          <option defaultValue value="£">
            £ Pound
          </option>
          <option value="$">$ Dollar</option>
          <option value="€">€ Euro</option>
          <option value="₹">₹ Ruppee</option>
        </select>
      }
    </div>
  );
};
