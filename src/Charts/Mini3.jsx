import { useEffect, useRef } from 'react';

const TradingViewMiniSymbolOverviewss = () => {
  const widgetRef = useRef(null);
  const scriptAppended = useRef(false);

  useEffect(() => {
    if (!scriptAppended.current) {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        "symbol": "NVDA",
        "width": "100%",
        "height": "250",
        "locale": "en",
        "dateRange": "12M",
        "colorTheme": "dark",
        "trendLineColor": "rgba(255, 255, 0, 1)",
        "underLineColor": "rgba(191, 144, 0, 1)",
        "underLineBottomColor": "rgba(127, 96, 0, 0)",
        "isTransparent": false,
        "autosize": false,
        "largeChartUrl": ""
      });
      widgetRef.current.appendChild(script);
      scriptAppended.current = true;
    }
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div id="tradingview-widget" className="tradingview-widget-container__widget" ref={widgetRef}></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
        </a>
      </div>
    </div>
  );
};

export default TradingViewMiniSymbolOverviewss;


// import  { useState, useEffect } from 'react';
// import { createChart } from 'lightweight-charts';

// function LineCharts() {
//   const [data, setData] = useState([]);
//   const [latestPrice, setLatestPrice] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('/csv files/BTCUSDT_5year_data.csv'); // Ensure data.csv is in the public directory
//         const csvData = await response.text();
//         const rows = csvData.trim().split('\n').slice(1); // Remove the header row
//         const parsedData = rows.map((row) => {
//           const [date, open, high, low, close] = row.split(',');
//           return {
//             time: new Date(date).getTime() / 1000, // Unix timestamp in seconds
//             value: parseFloat(close), // Use close value for line chart
//           };
//         });
//         console.log('Parsed Data:', parsedData);
//         setData(parsedData);
//         setLatestPrice(parsedData[parsedData.length - 1].value); // Set the latest price
//       } catch (error) {
//         console.error('Error loading data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (data.length > 0) {
//       const chartContainer = document.getElementById('chart');
//       if (chartContainer) {
//         const chart = createChart(chartContainer, {
//           width: chartContainer.clientWidth,
//           height: chartContainer.clientHeight,
//           layout: {
//             backgroundColor: '#ffffff',
//             textColor: '#000',
//           },
//           grid: {
//             vertLines: {
//               color: '#e1e1e1',
//             },
//             horzLines: {
//               color: '#e1e1e1',
//             },
//           },
//           timeScale: {
//             timeVisible: true,
//             secondsVisible: false,
//           },
//         });

//         const lineSeries = chart.addLineSeries();
//         lineSeries.setData(data);

//         // Ensure chart resizes with window
//         const handleResize = () => {
//           chart.resize(chartContainer.clientWidth, chartContainer.clientHeight);
//         };

//         window.addEventListener('resize', handleResize);

//         return () => {
//           window.removeEventListener('resize', handleResize);
//         };
//       } else {
//         console.error('Chart container not found');
//       }
//     } else {
//       console.log('Data is empty');
//     }
//   }, [data]);

//   return (
//     <div style={{ height: '250', width: '100%' }}>
//       {/* <h2>BTCUSDT</h2>
//       {latestPrice && <h3>Latest Value: {latestPrice}</h3>} */}
//       <div id="chart" style={{ height: 250, width: '100%' }} />
//     </div>
//   );
// }

// export default LineCharts;


