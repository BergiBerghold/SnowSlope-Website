import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import 'leaflet/dist/leaflet.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Map from './components/Map/Map';
import Params from './components/Params/Params';
import Loading from "./components/Loading/Loading";
import DisplayMap from "./components/DisplayMap/DisplayMap";
import Start from './components/Start/Start'


function App() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/start" element={<Start/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/map" element={<Map/>} />
                <Route path="/params" element={<Params/>} />
                <Route path="/loading" element={<Loading/>} />
                <Route path="/results" element={<DisplayMap/>} />
            </Routes>
        </main>
    )
}

// ========================================

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);
