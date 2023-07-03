import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip, Brush } from 'recharts';
import { format } from 'date-fns'; 

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label ">{`Date : ${payload[0].payload.date}`}</p>
        <p className="desc">{`Open price : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

function RegisterPage() {
  const [chartData, setChartData] = useState([]);

  const fetchData = () => {
    fetch('https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=API_KEY')
      .then(response => response.json())
      .then(data => {
        const weeklyData = data['Weekly Time Series'];
        const dates = Object.keys(weeklyData);

        const formattedDatesAndPrices = dates.map(date => {
          const parsedDate = new Date(date);
          const formattedDate = format(parsedDate, 'P');
          const openPrice = parseFloat(weeklyData[date]['1. open']);

          return { date: formattedDate, openPrice: openPrice };
        });

        setChartData(formattedDatesAndPrices);
      })
      .catch(error => console.error('Error:', error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getMinOpenPrice = () => {
    return chartData.reduce((min, data) => (data.openPrice < min ? data.openPrice : min), Infinity);
  };

  const getMaxOpenPrice = () => {
    return chartData.reduce((max, data) => (data.openPrice > max ? data.openPrice : max), -Infinity);
  };

  const minOpenPrice = getMinOpenPrice();
  const maxOpenPrice = getMaxOpenPrice();




  const CustomXAxisTick = ({ x, y, payload }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const tickColor = isHovered ? 'red' : 'blue';

    return (
      <g transform={`translate(${x},${y})`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <text x={0} y={0} dy={16} textAnchor="end" fill={tickColor}>
          {payload.value}
        </text>
      </g>
    );
  };

  const [activePayload, setActivePayload] = useState(null);

  const TooltipContent = (props) => {
    if (props.active && props.payload) {
      setActivePayload(props.payload);
    }
    return null;  // Return null so no tooltip content is rendered inside the chart
  };

  return (
    <div className="bg-gray-900">
      <h1 className="mb-8 text-white">Register Page</h1>

      {chartData.length > 0 && (
        <div style={{ position: 'relative' }}> 
          <LineChart width={1000} height={500} data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="date" tick={<CustomXAxisTick />} />
            <YAxis domain={[minOpenPrice, maxOpenPrice]} />
            <Tooltip content={<TooltipContent />} />
            <Line
              type="monotone"
              dataKey="openPrice"
              stroke="#8884d8"
              dot={false}
              activeDot={{ stroke: 'red', strokeWidth: 2, r: 6 }}
              
            />
            <Brush dataKey="date" height={30} width={50} stroke="#8884d8"/>
          </LineChart>

          {/*// Render the custom tooltip outside the chart, to the right*/}
          {activePayload && (
            <div className = "text-white" style={{ position: 'absolute', left: -30, top: '50%', transform: 'translateY(-50%)' }}>
              <CustomTooltip active={true} payload={activePayload} />
            </div>
          )}
        </div>
      )}

      <Link to="/">Go back to Home</Link>
    </div>
  );
}

export default RegisterPage;