// import Navbar from "./components/Navbar/Navbar"
import './App.css';
import Header from "./components/Header/Header";
import { SetStateAction, useState } from "react";

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
      <Header childToParent={childToParent} />
    </>
  )
}

export default App
