import { getExpenses } from "@/services/expenses.api";
import type { MUtableT } from "../models/mutable.type";
import { useCallback, useEffect, useState } from "react";

export function useGetAPI() {
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
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);
  return { data, loaded, error };
}
