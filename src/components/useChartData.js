import { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';

const useChartData = (ticker) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = process.env.REACT_APP_API_KEY;
      const response = await fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${ticker}&apikey=${apiKey}`
      );
      const data = await response.json();

      console.log("Data received from Alpha Vantage API:", data);

      const weeklyData = data["Weekly Time Series"];
      const dates = Object.keys(weeklyData);
      let monthlyData = {};
      dates.forEach((date) => {
        const parsedDate = parseISO(date);
        const formattedDate = format(parsedDate, "yyyy-MM");
        const openPrice = parseFloat(weeklyData[date]["1. open"]);
        if (monthlyData[formattedDate]) {
          monthlyData[formattedDate].openPrice =
            (monthlyData[formattedDate].openPrice + openPrice) / 2;
        } else {
          monthlyData[formattedDate] = { date: formattedDate, openPrice: openPrice };
        }
      });
      const formattedDatesAndPrices = Object.values(monthlyData);
      setChartData(formattedDatesAndPrices);
    };

    fetchData();
  }, [ticker]);

  return chartData;
}

{/*change */}

export default useChartData;