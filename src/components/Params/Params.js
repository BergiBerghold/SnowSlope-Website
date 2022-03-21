import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import './params.css';

function Params(){
    const location = useLocation();
    const targetPosition = location.state;

    const [minGradient, setMinGradient] = useState(0);
    const [minGradientError, setMinGradientError] = useState("");

    const [maxGradient, setMaxGradient] = useState(40);
    const [maxGradientError, setMaxGradientError] = useState("");

    const updateMinGradient = e => {
        const { value } = e.target;
        const intValue = parseInt(value);

        if ((intValue < 0) || (intValue > 90)) {
            setMinGradientError("Minimum Gradient must be between 0 and 90 degrees")

        } else if (value === "") {
            setMinGradientError("Minimum Gradient must be a Number")

        } else if (intValue >= maxGradient) {
            setMinGradientError("Minimum Gradient must be less than Maximum Gradient")

        } else {
            setMinGradientError("")
        }

        setMinGradient(value)
    };

    const updateMaxGradient = e => {
        const { value } = e.target;
        const intValue = parseInt(value);

        if ((intValue < 0) || (intValue > 90)) {
            setMaxGradientError("Maximum Gradient must be between 0 and 90 degrees")

        } else if (value === "") {
            setMaxGradientError("Maximum Gradient must be a Number")

        } else if (intValue <= minGradient) {
            setMaxGradientError("Maximum Gradient must be greater than Minimum Gradient")

        } else {
            setMaxGradientError("")
        }

        setMaxGradient(value)
    };

    if (targetPosition) {
        return (
            <div id="background-image-params">
                <div id="background-transparency-params">
                    <div className="center-params">
                        <h3>
                            Choose Parameters
                        </h3>
                    </div>

                    <div className="center-params">
                        <div style={{padding: "10px"}}>
                            Enter the minimum Gradient (slope) you are willing to ski. Unit in Degrees
                        </div>

                        <span className="input-unit right">
                        <input className="input-field" type="number" placeholder="min" value={minGradient}
                               onChange={updateMinGradient}/>
                    </span>

                        {minGradientError && (<div className="error-message">{minGradientError}</div>)}

                    </div>

                    <div className="center-params">
                        <div style={{padding: "10px"}}>
                            Enter the maximum Gradient (slope) you are willing to ski. Unit in Degrees
                        </div>

                        <span className="input-unit right">
                        <input className="input-field" type="number" placeholder="max" value={maxGradient}
                               onChange={updateMaxGradient}/>
                    </span>

                        {maxGradientError && (<div className="error-message">{maxGradientError}</div>)}
                    </div>

                    <div className="center-params">

                        {(minGradientError || maxGradientError) ? (
                            <button id="calc-button" style={{backgroundColor: "gray", backgroundImage: "none"}}>Calculate</button>
                        ) : (
                            <Link to="/loading" state={{min: minGradient, max: maxGradient, pos: targetPosition}}>
                                <button id="calc-button">Calculate</button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                AMK
                {/*TODO create nodata page*/}
            </div>
        )
    }
}

export default Params