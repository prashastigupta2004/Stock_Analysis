
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import Home from './pages/home.jsx';
import SingleStock from './pages/SingleStock.jsx';
import SignIn from "./pages/Signin.jsx";
import SignUp from "./pages/Signup.jsx";
// import { Signup } from "./pages/Signup.jsx";


function App() {
  

    return (
      <>
       <BrowserRouter>
         <Routes>
          <Route path='/' exact element={<Home/>}></Route>
          <Route path='/stock' exact element={<SingleStock/>}></Route>
          <Route path='/signin' exact element={<SignIn/>}></Route>
          <Route path='/signup' exact element={<SignUp/>}></Route>
         </Routes>
       </BrowserRouter>
      </>
    )
  }

export default App;



