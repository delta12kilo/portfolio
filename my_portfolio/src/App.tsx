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

      <div className='flex flex-col h-40 max-w-[130vh] mx-auto'>
        <div>
          <span className='text-5xl text-[#ec8846]'>
            Hi, I'm
          </span>
        </div>
        <div>
          <span className='text-8xl text-[#ec8846]'>
            Deepak Kumar
          </span>
        </div>
      </div>
    </>
  )
}

export default App
