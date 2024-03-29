import './App.css';
import Header from "./components/Header/Header";
import { SetStateAction, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from './Router';

function App() {
  const [data, setData] = useState(true);

  const childToParent = (childdata: SetStateAction<boolean>) => {
    setData(childdata);
  }

  if (data) {
    document.body.classList.remove("dark");
  } else {
    document.body.classList.add("dark");
  }


  return (
    <>
      
      <BrowserRouter>
        <Header childToParent={childToParent} />
        <Router />
      </BrowserRouter>
      
      
    </>
  )
}

export default App
