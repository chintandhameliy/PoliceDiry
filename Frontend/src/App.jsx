import React from "react"
import SignInSide from "./pages/Login"
import Navbar from "./component/Navbar"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Officers from "./pages/Officers"
import Criminals from "./pages/Criminals"
import Cases from "./pages/Cases"
import Charges from "./pages/Charges"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

    return (
        <div >
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<SignInSide/>} />
                    <Route exact path="/Home" element={<Home/>}/>
                    <Route exact path="/Dashboard" element={<Dashboard/>} />
                    <Route exact path="/Officers" element={<Officers/>} />
                    <Route exact path="/Criminals" element={<Criminals/>} />
                    <Route exact path="/Charges" element={<Charges/>} />
                    <Route exact path="/Cases" element={<Cases/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
