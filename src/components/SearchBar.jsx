import '../App.css';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
  return (
    <div className="input-wrapper">
        <SearchIcon id="icon"/>
        <input placeholder='search markets here'/>
    </div>    
  );
}

export default SearchBar;



