"use client";
import Sidebar from "./Components/sidebar";
import Card from "./Components/card";
import { useFetchData } from "./Hooks/useFetchData";

export default function Home() {
  const { data, dataHistory, loading, error, fetchData } = useFetchData(); // Use fetchData from hook

  return (
    <div className="flex">
      <Sidebar dataHistory={dataHistory} />
      {data && (
        <div className="w-full min-h-screen flex items-center justify-center text-center">
          <div className="flex flex-col">
            <Card person={data} />
            <button 
              onClick={fetchData} // Fetch new data when button is clicked
              className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md"
              disabled={loading} // Disable button while loading
            >
              {loading ? "Fetching..." : "Fetch New User"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}