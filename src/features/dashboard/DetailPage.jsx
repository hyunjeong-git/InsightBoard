import { useQuery } from "@tanstack/react-query"
import { getBitCoinPrices } from "./dashboardAPI";


const DetailPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['bitcoinPrices'],
    queryFn: getBitCoinPrices,
    staleTime: 1000 * 60 * 5,        // (선택) 5분 동안 캐시 유지
  })

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>


  return (
    <div>
      <h2>Dashboard Chart</h2>
      <p>Chart will be displayed here.</p>
    </div>
  );
}

export default DetailPage;