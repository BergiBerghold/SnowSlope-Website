import React, {useEffect, useState} from 'react';
import './map.css';
import {MapContainer, Marker, Polygon, TileLayer, useMapEvents} from "react-leaflet";
import L from "leaflet";
import {Link} from "react-router-dom";
import locate_user_icon from "../../static/icons/locate_user.png"
import confirm_target_icon from "../../static/icons/confirm_target.png"
import polyline_coords from "./polyline_coords"

export function GetIcon(iconSize, iconType) {
    let _iconUrl;
    let _iconAnchor = iconSize / 2;

    switch (iconType) {
        case "crosshair":
            _iconUrl = require("../../static/icons/crosshair.png");
            break;

        case "userposition":
            _iconUrl = require("../../static/icons/user_position_marker.png");
    }

    return L.icon({
        iconUrl: _iconUrl,
        iconSize: [iconSize, iconSize],
        iconAnchor: [_iconAnchor, _iconAnchor]
    });
}

function LocationMarker() {
    const [position, setPosition] = useState(null)

    const map = useMapEvents({
        move() {
            setPosition(map.getCenter())
        },
    })

    return position === null ? null : (
        <Marker position={position} icon={GetIcon(50, "crosshair")}/>
    )
}

function ConfirmTarget() {
    const [position, setPosition] = useState(null)

    const map = useMapEvents({
        move() {
            setPosition(map.getCenter())
        }
    })

    return(
        <Link to="/params" state={position}>
            <img className="nav-icon" src={confirm_target_icon}/>
        </Link>
    )

}

function MarkAvailableArea() {
    const [currentZoom, setCurrentZoom] = useState(null)

    const map = useMapEvents({
        zoomend() {
            setCurrentZoom(map.getZoom())
        }
    })

    if (currentZoom < 12) {
        return(
            <Polygon
                pathOptions={{
                    color: 'white',
                    opacity: 0.9,
                    fillColor: 'green',
                    fillOpacity: 0.3
                }}
                positions={polyline_coords()}
            />
        )
    } else {
        return null
    }


}

export function CenterOnPosition(map, setPosition) {
    map.locate().on("locationfound", function (e) {
        map.flyTo(e.latlng, map.getZoom());
        setPosition([e.latlng.lat, e.latlng.lng])
    });
}

function ZoomToViewAll(map) {
    useEffect(() => {
        if (map.map !== null) {
            map.map.fitBounds(L.polyline(polyline_coords()).getBounds());
        }
    }, [map]);
    return null
}

function Map() {
    const [map, setMap] = useState(null);
    const [position, setPosition] = useState(null)

    return (
        <MapContainer whenCreated={setMap}>

            <TileLayer
                url="https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
                subdomains={['mt1','mt2','mt3']}
            />

            <MarkAvailableArea/>

            <LocationMarker/>

            <ZoomToViewAll map={map}/>

            {position !== null &&
                <Marker position={position} icon={GetIcon(20, "userposition")}/>
            }

            <div id="locate-user-icon-container">
                <img className="nav-icon" src={locate_user_icon} onClick={() => CenterOnPosition(map, setPosition)}/>
            </div>

            <div id="confirm-target-icon-container">
                <ConfirmTarget/>
            </div>

        </MapContainer>
    )
}

export default Map