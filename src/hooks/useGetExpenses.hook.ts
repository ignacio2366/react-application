import { getExpenses } from "@/api/expenses.api";
import type { MUtableT } from "../models/mutable.type";
import { useCallback, useEffect, useState } from "react";

export function useGetExpenses() {
  const [data, setData] = useState<MUtableT[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await getExpenses();
      setData(response);
      setLoaded(true);
    } catch (error) {
      setError("An error occurred while fetching data");
      setLoaded(false);
      window.alert(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);
  return { data, loaded, error };
}
