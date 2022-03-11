import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import "./App.css";
import {makeStyles} from '@material-ui/core'
import Headerss from "./components/Headerss";
import CoinPages from "./Pages/CoinPage";

 
   const useStyle = makeStyles(() => ({
     App:{
        backgroundColor :"#14161a",
        color:'white',
        minHeight:"100vh",
     },
   }));
   function App() { 
   const classes = useStyle()
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Headerss />
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/coins/:id" element={<CoinPages/>}></Route>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App

