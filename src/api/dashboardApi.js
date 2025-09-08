import axios from "axios";

export const getBitCoinPrices = async () => {
    const res = await axios.get(
        'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart',
        {
            params: {
                vs_currency: 'usd',
                days: 30,
            },
        }
    )
 
    return res.data.prices.map(([timestamp, price]) => ({
        date: timestamp,
        price: price.toFixed(2),
    }))
}