import '../App.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
  <>
    <footer>
        <div className="f-info">
            <div className="f-info-socials">
                <FacebookIcon/>
                <LinkedInIcon/>
                <InstagramIcon/>
            </div>
            <div className="f-info-brand">  &copy; StockAI Private Limited </div>
            <div className="f-info-links">
                <a href="/Privacy">Privacy</a>
                <a href="/Terms">Terms</a>
            </div>
        </div>
   </footer>
  </>

    
  );
}

export default Footer;


