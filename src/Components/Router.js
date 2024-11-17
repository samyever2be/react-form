import React from "react";
import Nav from "./Nav";
import { Routes, Route } from "react-router-dom";
import UserRegister from "./UserRegister";
import Adviceapp from "./Adviceapp";
import Home from "./Home";
const Router = ()=>{
    return(
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/demoform" element={<UserRegister/>}/>
                <Route path="/advice" element={<Adviceapp/>}/>
            </Routes>
        </>
    )
}

export default Router;