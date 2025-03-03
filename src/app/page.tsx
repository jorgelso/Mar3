"use client";
import Sidebar from "./Components/sidebar";
import Card from "./Components/card";
import { useFetchData } from "./Hooks/useFetchData";

export default function Home() {
  const { data, loading, error } = useFetchData();

  return (
    <div>
      {data && (
        <pre className="bg-gray-100 p-4 rounded-md text-xs">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}
