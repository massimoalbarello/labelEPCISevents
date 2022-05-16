import {
    ComposableMap,
    Geographies,
    Geography,
    Marker
} from "react-simple-maps";
import { useState, useEffect } from 'react';
  
const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
;
  
function MapComponent(props) {

    const [markerCount, updateMarkerCount] = useState(0);

    useEffect(() => {
        if (markerCount < props.coordinates.length) {
            setTimeout(() => {
                updateMarkerCount(() => markerCount + 1);
                console.log(props.coordinates[markerCount]);  
            }, 1000);
        }
    }, [markerCount])

    return (
        <div>
            <ComposableMap>
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                    geographies.map(geo => (
                        <Geography 
                            key={geo.rsmKey} 
                            geography={geo}
                            fill="#DDD"
                            stroke="#FFF" />
                    ))
                    }
                </Geographies>
                {props.coordinates.filter((coordinatePair, index) => {
                    if (index < markerCount) {
                        return coordinatePair;
                    }
                }).map((coordinatePair, index) => {
                    return (
                        // using longitude as key to prevent re-rendering
                        <Marker key={coordinatePair[0]} coordinates={coordinatePair}>
                            <circle r={4+index} fill="#F53" />
                        </Marker>
                    )
                })}
            </ComposableMap>

        </div>

    )
}

export default MapComponent;