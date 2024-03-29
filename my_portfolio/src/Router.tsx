import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";

export default function Router() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="about" element={<About />} />
            </Routes>
        </>
    )
}
