import React from 'react';
import {Link} from 'react-router-dom';
import './home.css';

class Home extends React.Component {
    render() {
        return (
            <div id="background-image-home">
                <div id="background-transparency-home">
                    <div className="center-home">
                        <h1>
                            Welcome to SkiSlope
                        </h1>
                    </div>

                    <div className="center-home">
                        This website is an interactive tool that can calculate routes for backcountry
                        skiing - or snowboaring for that matter. It uses public datasets of terrain height measurements
                        also called Digital Elevation Models. Therefore this tool is limited to areas where those
                        Models are freely available. As of now it only works in the State of Salzburg, Austria. This may
                        change in the future as more data becomes publicly available and I get around to implementing
                        them.
                        <br/>
                        <br/>
                        In the meantime - have Fun skiing in Salzburg
                    </div>

                    <div className="center-home">
                        <Link to="/start">
                            <button id="start-button">
                                START NOW
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home