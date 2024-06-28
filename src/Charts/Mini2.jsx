import { useEffect, useRef } from 'react';

const TradingViewMiniSymbolOverviews = () => {
  const widgetRef = useRef(null);
  const scriptAppended = useRef(false);

  useEffect(() => {
    if (!scriptAppended.current) {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        "symbol": "BTCUSDT",
        "width": "100%",
        "height": "250",
        "locale": "en",
        "dateRange": "12M",
        "colorTheme": "dark",
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

export default TradingViewMiniSymbolOverviews;
