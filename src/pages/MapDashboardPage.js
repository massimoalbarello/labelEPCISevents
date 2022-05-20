import { useState, useEffect } from 'react';

import MapComponent from '../components/MapComponent';

function MapDashboardPage(props) {

    const [dashboardUrl, setDashboardUrl] = useState('');
    console.log(props.api);
    
    useEffect(() => {        
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': props.api,
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
        <MapComponent coordinates={[[70, 49], [30, 67], [3, 58], [69, 34], [92, 57]]}/>
        <iframe src={dashboardUrl} width="100%" height="1700px" />
    </div>
    );
}

export default MapDashboardPage;