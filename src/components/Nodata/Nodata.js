import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import './nodata.css';

function Nodata() {
    const location = useLocation();
    const targetPosition = location.state;
}

export default Nodata