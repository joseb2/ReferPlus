import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { format, parseISO } from 'date-fns';

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`Date : ${payload[0].payload.date}`}</p>
        <p className="desc">{`Open price : ${payload[0].payload.openPrice}`}</p>
      </div>
    );
  }
  return null;
}

function RegisterPage() {
  const [chartData, setChartData] = useState([]);
  const [ticker, setTicker] = useState("IBM");
  const [inputValue, setInputValue] = useState(ticker); 

  const fetchData = () => {
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${ticker}&apikey=API_KEY`)
      .then(response => response.json())
      .then(data => {
        const weeklyData = data['Weekly Time Series'];
        const dates = Object.keys(weeklyData);
        let monthlyData = {};
        dates.forEach(date => {
          const parsedDate = parseISO(date);
          const formattedDate = format(parsedDate, 'yyyy-MM');
          const openPrice = parseFloat(weeklyData[date]['1. open']);
          if (monthlyData[formattedDate]) {
            monthlyData[formattedDate].openPrice = (monthlyData[formattedDate].openPrice + openPrice) / 2;
          } else {
            monthlyData[formattedDate] = { date: formattedDate, openPrice: openPrice };
          }
        });
        const formattedDatesAndPrices = Object.values(monthlyData);
        setChartData(formattedDatesAndPrices);
      })
      .catch(error => console.error('Error:', error));
  };

  useEffect(() => {
    fetchData();
  }, [ticker]);

  const CustomXAxisTick = ({ x, y, payload }) => {
    const year = payload.value.substring(0, 4);
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="middle" fill="white">
          {year}
        </text>
      </g>
    );
  };

  return (
    <div className="flex h-screen bg-gray-900">
      {/* Left Sidebar */}
      <aside className="w-64 h-3/4 screen:h-full shadow-lg ml-10 mt-20 rounded-lg bg-gray-800">
        <div className="flex flex-col sidebar mt-5">
          <Link to="#" className="flex items-center py-4 px-6 text-white justify-center hover:bg-gray-900">
            <span className="material-icons-sharp mr-2">dashboard</span>
            <h3 className="text-center">Dashboard</h3>
          </Link>
        </div>
      </aside>
      {/* Main Content */}
      <div className="flex-grow ml-8">
        {/* Ticker Symbol Search */}
        <div className="mt-5 mb-5 bg">
          <input
            type="text"
            placeholder="Search ticker..."
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            className="rounded p-2 bg-gray-800 text-white"
          />
          <button onClick={() => setTicker(inputValue)} className="ml-2 rounded text-white p-2">Search</button>
        </div>
        {/* Ticker Symbol */}
        <div className="bg-gray-800 h-[3rem] w-[9rem] mt-2 mb-5 flex items-center justify-center rounded-lg">
          <span className="text-white text-4xl">{ticker}</span>
        </div>
        {/* Chart */}
        <div className="relative w-[60] h-[40rem]  mr-8 bg-gray-800 rounded-lg pr-20 pt-7">
          {chartData.length > 0 && (
            <LineChart width={1200} height={500} data={chartData} margin={{ top: 20, right: 100, left: 50, bottom: 0 }}>
              <XAxis dataKey="date" tick={<CustomXAxisTick />} />
              <YAxis tick={{ fill: 'white' }} />
              <Tooltip content={<CustomTooltip />} />
              <Line type="monotone" dataKey="openPrice" stroke="#8884d8" dot={false} />
            </LineChart>
          )}
        </div>
        <Link to="/" className="text-white">
          Go back to Home
        </Link>
      </div>
      {/* Right Sidebar */}
      <aside className="w-64 h-3/4 screen:h-full shadow-lg mr-11 mt-[4.6rem] rounded-lg bg-gray-800">
        <div className="flex flex-col sidebar mt-5">
          <Link to="#" className="flex items-center py-4 px-6 text-white justify-center hover:bg-gray-900">
            <span className="material-icons-sharp mr-2">dashboard</span>
            <h3 className="text-center">Right Sidebar</h3>
          </Link>
        </div>
      </aside>
    </div>
  );
}

export default RegisterPage;
