import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
const Budget = () => {
  const { budget, dispatch, expenses, currency } = useContext(AppContext);
  const [budgetV, setBudgetV] = useState(budget);

  const submitEvent = (event) => {
    const budgetThreshold = 20000;
    const enteredValue = parseInt(event.target.value);
    if (enteredValue > budgetThreshold) {
      alert("Budget cannot exceed 20,000");
      return;
    }

    const totalExpenses = expenses.reduce((total, item) => {
      return (total += item.cost);
    }, 0);

    if (enteredValue < totalExpenses) {
      alert("You cannot reduce the budget value lower than the spending");
      return;
    }

    // dispatch({
    //   payload: budget,
    //   type: "SET_BUDGET",
    // });
    setBudgetV(event.target.value);
  };
  return (
    <div className="alert alert-secondary">
      <label for="budget">Budget: {currency}</label>
      <input
        id="budget"
        name="budget"
        value={budgetV}
        type="number"
        onChange={(event) => submitEvent(event)}
        step="10"
      ></input>
    </div>
  );
};
export default Budget;
