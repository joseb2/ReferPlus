import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { useResizeDetector } from 'react-resize-detector';
import { ResponsiveContainer } from 'recharts';
import LeftSidebar from './LeftSidebar';
import CustomTooltip from './CustomTooltip';
import useChartData from './useChartData';

function RegisterPage() {
  const { width } = useResizeDetector();
  const [ticker, setTicker] = useState("IBM");
  const [inputValue, setInputValue] = useState(ticker);
  const [tooltipContent, setTooltipContent] = useState(null); // Store tooltip content
  const ref = useRef(null);
  const chartData = useChartData(ticker);

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

  const handleInputChange = (e) => {
    const inputValue = e.target.value.toUpperCase();
    setInputValue(inputValue);
  };

  const handleSearch = () => {
    setTicker(inputValue);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="grid grid-cols-5 gap-4 p-4">
        <div className="col-span-1 bg-gray-800 flex flex-col rounded-lg">
          <LeftSidebar ticker={ticker} />
        </div>

        <div className="col-span-4 bg-gray-800 flex flex-col items-center justify-start rounded-lg p-4">
          {/* Ticker Symbol Search */}
          <div className="mt-5 mb-5 w-full px-8">
            <input
              type="text"
              placeholder="Search ticker..."
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              className="rounded p-2 text-black w-full"
            />
            <button
              onClick={handleSearch}
              className="ml-2 rounded text-white p-2"
            >
              Search
            </button>
          </div>
          {/* Chart */}
          <div className="w-full h-[40rem] rounded-lg p-8" ref={ref}>
            {chartData.length > 0 && (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={chartData}
                  margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
                >
                  <XAxis dataKey="date" tick={<CustomXAxisTick />} />
                  <YAxis tick={{ fill: "white" }} />
                  <Tooltip content={<CustomTooltip setTooltipContent={setTooltipContent} />} />
                  <Line type="monotone" dataKey="openPrice" stroke="#8884d8" dot={false} />
                </LineChart>
              </ResponsiveContainer>
            )}
          </div>
          <Link to="/" className="text-white">
            Go back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
