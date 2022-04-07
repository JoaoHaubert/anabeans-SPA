import "./Content.css"
import React from 'react';
import { Route, Routes } from "react-router-dom"
import Home from "../views/screens/Home"
import FMenu from "../views/screens/FMenu"
import Gallery from "../views/screens/Gallery"
import NotFound from "../views/screens/NotFound"
import OrderNow from "../views/screens/OrderNow"

const Content = props => (
    <main className="Content">
        <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/Menu" element = {<FMenu />} />
            <Route path = "/Gallery" element = {<Gallery />} />
            <Route path = "/OrderNow" element = {<OrderNow />} />
            <Route path = "*" element = {<NotFound />} />
        </Routes>
    </main>
)

export default Content;