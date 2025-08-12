import type { ExpensesT } from "@/models/expenses.type";
import { commonservices } from "./commonservices";
import type { MUtableT } from "@/models/mutable.type";

export async function getExpenses() {
  try {
    const APIURL = "/expenses";
    const response = await commonservices({ method: "GET", url: APIURL });
    return response;
  } catch (error) {
    window.alert(error);
  }
}
export async function addExpenses(expensesform: ExpensesT) {
  try {
    const APIURL = "/expenses/add";
    const response = await commonservices({
      method: "POST",
      url: APIURL,
      body: expensesform,
    });
    return response;
  } catch (error) {
    window.alert(error);
  }
}

export async function deleteExpenses(expensesId: number) {
  try {
    const APIURL = `/expenses/delete/${expensesId}`;
    const response = await commonservices({
      method: "DELETE",
      url: APIURL,
    });
    return response;
  } catch (error) {
    window.alert(error);
  }
}
export async function editExpenses(expensesform: MUtableT) {
  try {
    const APIURL = `/expenses/edit`;
    const response = await commonservices({
      method: "PUT",
      url: APIURL,
      body: expensesform,
    });
    return response;
  } catch (error) {
    window.alert(error);
  }
}
