import React, { useState, useEffect } from 'react';
import { createChart } from 'lightweight-charts';
import "../App.css";
import Nav from '../components/nav';
import Footer from '../components/footer';

function LineCharts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.csv');
        const csvData = await response.text();
        const rows = csvData.trim().split('\n').slice(1); // Remove the header row
        const parsedData = rows.map((row) => {
          const [date, open, high, low, close] = row.split(',');
          return {
            time: new Date(date).getTime() / 1000, // Unix timestamp in seconds
            open: parseFloat(open),
            high: parseFloat(high),
            low: parseFloat(low),
            close: parseFloat(close),
          };
        });
        console.log('Parsed Data:', parsedData);
        setData(parsedData);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const chartContainer = document.getElementById('chart');
      if (chartContainer) {
        const chart = createChart(chartContainer, {
          width: chartContainer.clientWidth,
          height: chartContainer.clientHeight,
          layout: {
            backgroundColor: '#ffffff', // White background
            textColor: '#000000', // Dark text
          },
          grid: {
            vertLines: false,
            horzLines: false,
          },
          timeScale: {
            timeVisible: true,
            secondsVisible: false,
          },
          crosshair: {
            mode: 1,
            vertLine: {
              width: 0.5,
              color: '#000000',
              style: 0,
            },
            horzLine: {
              width: 0.5,
              color: '#000000',
              style: 0,
            },
          },
        });

        const candleSeries = chart.addCandlestickSeries();
        candleSeries.setData(data);

        // Customize crosshair labels
        chart.applyOptions({
          localization: {
            dateFormat: 'yyyy-MM-dd',
          },
          crosshair: {
            vertLine: {
              labelBackgroundColor: '#000000',
            },
            horzLine: {
              labelBackgroundColor: '#000000',
            },
          },
        });

        // Ensure chart resizes with window
        const handleResize = () => {
          chart.resize(chartContainer.clientWidth, chartContainer.clientHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
          window.removeEventListener('resize', handleResize);
          chart.remove();
        };
      } else {
        console.error('Chart container not found');
      }
    } else {
      console.log('Data is empty');
    }
  }, [data]);

  return (
    <div style={{ height: 'calc(100vh - 60px)', width: '100%', backgroundColor: '#ffffff', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '0px', paddingRight: '0px', marginTop: '0px', marginLeft: '0px' }}> {/* Adjusted container styles */}
      <div style={{ color: '#000000', marginBottom: '10px', paddingTop: '10px', marginLeft: '0px' }}>PREDICTED STOCK PRICE FOR AAPL</div> {/* Adjusted label styles */}
      <div id="chart" style={{ height: 'calc(100% - 40px)', width: '100%', marginLeft: '0px', marginTop: '0px' }} /> {/* Adjusted chart styles */}
    </div>
  );
}

function SingleStock() {
  return (
    <>
      <Nav />
      <div className="container2" style={{ marginTop: '0px', paddingTop: '0px', paddingBottom: '0px', paddingLeft: '0px', paddingRight: '0px' }}> {/* Adjusted margin to reduce gap */}
        <div className="left">
          <LineCharts /> {/* Added LineCharts component here */}
        </div>
        <div className="right">
          <div className="top"></div>
          <div className="bottom"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SingleStock;
