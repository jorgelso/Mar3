import { useEffect, useState } from "react";
import { Person } from "../types/person";

const API_URL = "https://randomuser.me/api/";

export const useFetchData = () => {
  const [data, setData] = useState<Person | null>(null);
  const [dataHistory, setDataHistory] = useState<Person[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const json = await response.json();
      const newData = json.results[0];

      setData(newData);
      setDataHistory((prevHistory) => [...prevHistory, newData]);
    } catch (err) {
      setError((err as Error).message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, dataHistory, loading, error, fetchData }; // Return fetchData so it can be used in Home.tsx
};