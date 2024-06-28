
import  { useEffect, useRef } from 'react';

const TradingViewTimelineWidget = () => {
  const widgetRef = useRef(null);
  const scriptAppended = useRef(false);

  useEffect(() => {
    if (!scriptAppended.current) {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        "feedMode": "all_symbols",
        "isTransparent": false,
        "displayMode": "regular",
        "width": "100%",
        "height": "550",
        "colorTheme": "dark",
        "locale": "en",
        "backgroundColor": "#fff",
      });
      widgetRef.current.appendChild(script);
      scriptAppended.current = true;
    }
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div id="tradingview-widget" className="tradingview-widget-container__widget" ref={widgetRef}></div>
      <div className="tradingview-widget-copyright">
      </div>
    </div>
  );
};

export default TradingViewTimelineWidget;
