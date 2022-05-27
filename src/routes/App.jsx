import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "../containers/Layout";
import Home from "../pages/Home";

export default function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    {/* <Route path="*" element={<NotFound/>}/> */}
                </Routes>  
            </Layout>
        </Router>
    );
}
