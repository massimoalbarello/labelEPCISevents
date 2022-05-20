import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";

import MapPage from './MapPage';


export default function EventList() {
    
    const location = useLocation();
    const [api, setApi] = useState('');
    const [dashboardUrl, setDashboardUrl] = useState('');

    useEffect(() => {        
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': location.state.api,
            }
        };
        fetch('https://api.evrythng.io/v2/analytics/embed/dashboards/amplify::amplify_scans?embedDomain=https%3A%2F%2Fdashboard.evrythng.com&filters=', options )
            .then( response => response.json() )
            .then( response => {
                console.log(response);
                setDashboardUrl(response.ssoEmbedUrl);
            } );
    }, []);


    return (
        <div>
            <MapPage />
            <iframe src={dashboardUrl} width="100%" height="1700px" />
        </div>
    );
}