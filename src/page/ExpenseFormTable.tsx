import "./style.css";
import { useCallback, useState } from "react";

import { Typography } from "@mui/material";
import type { ExpensesT } from "./../models/expenses.type";

import { addExpenses } from "@/api/expenses.api";
import BtnSubmit from "@/components/Button/BtnSubmit";
import TextInput from "@/components/Inputs/TextInput/TextInput";
import { MessageModal } from "@/components/Modal/MessageModal";

const ExpenseFormTable = () => {
  const defaultValue = {
    description: "",
    amount: 0.0,
    date: "",
  };
  const [expenses, setExpenses] = useState<ExpensesT>(defaultValue);
  const [error, setError] = useState({
    isOpen: false,
    title: "",
    message: "",
  });

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setExpenses((prev) => ({ ...prev, [name]: value }));
    },
    [expenses]
  );
  const onChangeAmount = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      if (name === "amount") {
        const amount = parseFloat(value);
        setExpenses((prev) => ({ ...prev, [name]: amount }));
      }
    },
    [expenses.amount]
  );
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await addExpenses(expenses);
    if (response.status) {
      setError({
        isOpen: true,
        title: "Success",
        message: "Expenses added successfully.",
      });
      setExpenses(defaultValue);
      setTimeout(() => {
        location.reload();
      }, 3000);
    } else {
      setError({
        isOpen: true,
        title: "Not Added",
        message: "Not Added",
      });
    }
  };

  const handleClose = useCallback(() => {
    setError({ isOpen: false, title: "", message: "" });
  }, []);
  return (
    <>
      {error.isOpen && (
        <MessageModal
          isOpen={error.isOpen}
          handleClose={handleClose}
          title={error.title}
          message={error.message}
        />
      )}

      <Typography
        fontWeight={"bold"}
        textAlign={"center"}
        width={"100%"}
        fontSize={"2rem"}
      >
        Add Expenses
      </Typography>
      <form className="form-controller" onSubmit={handleSubmit}>
        <TextInput
          placeholder="Description"
          label="Add Description"
          type="text"
          name="description"
          value={expenses.description}
          required
          onChange={onChange}
        />
        <TextInput
          placeholder="Amount"
          label="Add Amount"
          type="text"
          name="amount"
          value={expenses.amount.toString()}
          required
          onChange={onChangeAmount}
        />
        <TextInput
          label="Date"
          type="date"
          name="date"
          value={expenses.date}
          required
          onChange={onChange}
        />
        <BtnSubmit label="Add Expenses" />
      </form>
    </>
  );
};

export default ExpenseFormTable;
