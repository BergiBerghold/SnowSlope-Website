import React, {useState} from "react";
import {MapContainer, Marker, TileLayer, useMapEvents} from "react-leaflet";
import locate_user_icon from "../../static/icons/locate_user.png";
import './displayMap.css'
import {Link, useLocation} from "react-router-dom";
import {CenterOnPosition, GetIcon} from "../Map/Map"

function DisplayMap() {
    const [map, setMap] = useState(null);
    const [position, setPosition] = useState(null)
    const location = useLocation();
    const data = location.state;

    if (data) {
        return (
            <MapContainer center={data.pos} zoom={13} whenCreated={setMap}>

                <TileLayer
                    url="https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
                    subdomains={['mt1','mt2','mt3']}
                />

                <TileLayer
                    url={"http://localhost:8000/" + data.resp.filename + "/{z}/{x}/{y}.png"}
                    tms="true"
                    opacity="0.4"

                    // TODO set min/max zoom here
                />

                {position !== null &&
                    <Marker position={position} icon={GetIcon(20, "userposition")}/>
                }

                <div id="locate-user-icon-container">
                    <img className="nav-icon" src={locate_user_icon} onClick={() => CenterOnPosition(map, setPosition)}/>
                </div>

                <Marker position={data.pos} icon={GetIcon(50, "crosshair")}/>

            </MapContainer>
        );

    } else {
        return (
            <div>
                AMK
                {/*TODO Create nodata page*/}
            </div>
        )
    }
}

export default DisplayMap