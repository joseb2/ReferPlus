import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip, Brush } from 'recharts';
import { format, parseISO } from 'date-fns'; 

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`Date : ${payload[0].payload.date}`}</p>
        <p className="desc">{`Open price : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

function RegisterPage() {
  const [chartData, setChartData] = useState([]);
  const [activePayload, setActivePayload] = useState(null);

  const fetchData = () => {
    fetch('https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=API_KEY')
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
    return (
      <g transform={`translate(${x + 20},${y})`}> 
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#666"
          transform="rotate(-35)"
        >
          {payload.value}
        </text>
      </g>
    );
  };


  const TooltipContent = (props) => {
    if (props.active && props.payload) {
      setActivePayload(props.payload);
    }
    return null;
  }; 

  useEffect(() => {
    document.body.classList.add('bg-gray-900');

    return () => {
        document.body.classList.remove('bg-gray-900');
    };
}, []);

return (
  <div className="flex h-screen bg-gray-900">
        
        {/* Sidebar */}
        <aside className="w-64 h-3/4 screen:h-full shadow-lg ml-5 mt-20 rounded-lg">
          <div className="flex flex-col sidebar mt-40 ml-5 ">
            <Link to="#" className="flex items-center py-4 px-6 text-white hover:text-blue-600">
              <span className="material-icons-sharp mr-2">dashboard</span>
              <h3>Dashboard</h3>
            </Link>
            <Link to="#" className="flex items-center py-4 px-6 text-white hover:text-blue-600">
              <span className="material-icons-sharp mr-2">receipt_long</span>
              <h3>History</h3>
            </Link> 
            <Link to="#" className="flex items-center py-4 px-6 text-white hover:text-blue-600">
              <span className="material-icons-sharp mr-2">receipt_long</span>
              <h3>History</h3>
            </Link>
            <Link to="#" className="flex items-center py-4 px-6 text-white hover:text-blue-600">
              <span className="material-icons-sharp mr-2">receipt_long</span>
              <h3>History</h3>
            </Link>
            <Link to="#" className="flex items-center py-4 px-6 text-white hover:text-blue-600">
              <span className="material-icons-sharp mr-2">receipt_long</span>
              <h3>History</h3>
            </Link>
            {/* ... (Add other links as per your requirement) */}
          </div>
        </aside>
   {/* Main Content */}
   <div className="flex-grow ml-8">
      {/* Chart */}
      <div className="relative mb-40 w-3/4 mt-40"> {/* Adjust the width as needed */}
        {chartData.length > 0 && (
          <LineChart width={1400} height={500} data={chartData} margin={{ top: 0, right: 100, left: 50, bottom: 5 }}>
            <XAxis dataKey="date" tick={<CustomXAxisTick />} interval={125} />
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
        )}

        {/* Custom Tooltip */}
        {activePayload && (
          <div className="text-white absolute right-20 top-1/2 transform -translate-y-1/2">
            <CustomTooltip active={true} payload={activePayload} />
          </div>
        )}
      </div>

      <Link to="/" className="text-white">Go back to Home</Link>
    </div>
  </div>
); 
        }

export default RegisterPage;