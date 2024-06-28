import '../App.css';
import Navbar from "../components/Navbar.jsx";
import SearchBar from '../components/SearchBar.jsx';
// import  News  from '../components/News.jsx';
// import Grid from '@mui/material/Grid';
// import Card from '@mui/material/Card';
// import Typography from '@mui/material/Typography';
// import CardContent from '@mui/material/CardContent';
import Footer from '../components/footer.jsx';
// import TradingViewWidget from '../Charts/LineCharts.jsx'; // Ensure this path is correct
import TradingViewWidget from '../Charts/chart1';
import LineCharts from "../components/News.jsx";
import TradingViewMiniSymbolOverview from "../Charts/Mini.jsx";
import TradingViewMiniSymbolOverviews from "../Charts/Mini2.jsx";
import TradingViewMiniSymbolOverviewss from "../Charts/Mini3.jsx";



function App() {
  return (
  <>
     <section className='app'>
      <div className='nav'>
        <Navbar/>
      </div>
      <div className="container">
        <h1> Look first /</h1>
        <h1>Then Leap .</h1>
        <p>The best trades require research, then commitment .</p> 
        <SearchBar/>
      </div>
    </section>
    <div className="App">
      <div className="top-container">
        <div className="card"><TradingViewMiniSymbolOverview/></div>
        <div className="card"><TradingViewMiniSymbolOverviews /></div>
        <div className="card"><TradingViewMiniSymbolOverviewss/></div>
      </div>
      <div className="bottom-container">
        <div className="big-box"><TradingViewWidget/></div>
        <div className="big-box"><LineCharts/></div>
      </div>
    </div>
    {/* <br/><br/>
      <Grid container spacing={2}>
                <Grid item xs={8} sx={{backgroundColor:"lightblue"}}>
                <Card sx={{ height:100 +"vh" }}>
                        <CardContent>
                            <TradingViewWidget/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4} sx={{backgroundColor:"lightblue"}}>
                <Card sx={{height:100 +"vh" }}>
                        <CardContent>
                            <News/>
                        </CardContent>
                    </Card>
                </Grid>
      </Grid> */}
      <Footer/>

  </>

    
  );
}

export default App;