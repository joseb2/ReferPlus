function CustomTooltip({ payload, label, active, setTooltipContent }) {
  if (active && payload && payload.length) {
    const data = payload[0].payload;

    // Use setTooltipContent from props here
    setTooltipContent({
      date: data.date,
      openPrice: data.openPrice,
    });

    return (
      <div className="custom-tooltip">
        <p className="label">{`Date : ${data.date}`}</p>
        <p className="desc">{`Open price : ${data.openPrice}`}</p>
      </div>
    );
  }
  return null;
}


export default CustomTooltip;
