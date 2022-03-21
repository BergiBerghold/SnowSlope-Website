import React from 'react'
import './start.css';
import locate_user_icon from "../../static/icons/locate_user.png"
import confirm_target_icon from "../../static/icons/confirm_target.png"
import {Link} from "react-router-dom";


function Start() {
    return (
        <div id="background-image-start">
            <div id="background-transparency-start">
                <div className="center-start">
                    <h2>
                        How to Calculate your Route
                    </h2>
                    <h3>
                        Step 1
                    </h3>
                    <p>
                        Use the map to select the point you want to reach. Simply drag the map around until the
                        red crosshair is where you want to ski to and hit the green button to confirm.
                        If you phone has GPS you can use the black button to center the map on your current
                        location.
                    </p>

                    <div className="center-icons-start">
                        <img src={locate_user_icon} className="display-icons-start"/>
                        Go to your GPS Position (Example)
                    </div>

                    <div className="center-icons-start">
                        <img src={confirm_target_icon} className="display-icons-start"/>
                        Confirm the point you want to ski to (Example)
                    </div>
                </div>

                <div className="center-start">
                    <h3>
                        Step 2
                    </h3>
                    <p>
                        Afterwards you will be asked to enter the minimum and the maximum slope inclination you are
                        willing to ski down. The default values are 0° and 40° respectively. That means that the
                        calculated routes won't go up the hill again <br/> (i.e. minimum 0°) or be steeper than 40°.
                    </p>
                </div>

                <div className="center-start">
                    <h3>
                        Step 3
                    </h3>
                    <p>
                        Hit the CALCULATE button and wait for a few seconds while the data is processed. When the
                        results are in you will be redirected to another map where you will again see the red
                        crosshair marking the endpoint you have chosen. Leading to that point you will see an area
                        marked in red. This area constitutes to all the points on the mountain from which you are able
                        to ski down to your end point while satisfying the min. and max. slope criteria. <br/><br/>
                        In other words, if you stay in the red area you will be able to reach the endpoint without
                        having to hike or encounter cliffs.
                    </p>
                    <p style={{color: "red", backgroundColor: "white", borderRadius: "10px", padding: "5px"}}>
                        Obviously there is no guarantee that the calculated routes are correct or safe. It is still
                        your responsibility to be careful out there!
                    </p>
                </div>

                <div className="center-start">
                    <Link to="/map">
                        <button id="start-button">
                            GOT IT
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Start
