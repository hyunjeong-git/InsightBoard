import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getBitCoinPrices } from "./dashboardAPI";
import TimeSeriesChart from "../../components/ charts/TimeSeriesChart";
import DataTable from "../../components/table/DataTable";

const DetailPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["bitcoinPrices"],
    queryFn: getBitCoinPrices,
    staleTime: 1000 * 60 * 5, // (선택) 5분 동안 캐시 유지
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <Link
        to="/"
        className="inline-flex items-center border border-indigo-300 px-3 py-1.5 rounded-md text-indigo-500 hover:bg-indigo-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 16l-4-4m0 0l4-4m-4 4h18"
          ></path>
        </svg>
        <span className="ml-1 font-bold text-lg">Back</span>
      </Link>
      <h1 className="text-[2.5rem]/none font-medium tracking-tight text-pretty p-4">Dashboard Chart</h1>
      <TimeSeriesChart data={data} />
      <DataTable tableData={data} />
    </div>
  );
};

export default DetailPage;
