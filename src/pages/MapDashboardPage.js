import { useState, useEffect, useContext } from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';

import MapComponent from '../components/MapComponent';

const labelsTheme = createTheme({
  palette: {
    authentic1: {
      main: "#388e3c",
    },
    authentic2: {
        main: "#66bb6a",
    },
    authentic3: {
        main: "#81c784",
    },
    notAuthentic3: {
      main: '#e57373',
    },
    notAuthentic2: {
        main: '#f44336',
    },
    notAuthentic1: {
        main: '#d32f2f',
    },
  },
});

function MapDashboardPage(props) {
    const location = useLocation();
    console.log(location.state.name);
    
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

    function labeledAsAuthenticHandler() {
        console.log("labeled as authentic");
        setCollectionLabel("authentic");
    }


    function setCollectionLabel(label){
    }

    return (
        <div>
            <MapComponent coordinates={[[70, 49], [30, 67], [3, 58], [69, 34], [92, 57]]}/>
            <iframe src={dashboardUrl} width="100%" height="1700px" />
            <ThemeProvider theme={labelsTheme}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button color="authentic1" onClick={labeledAsAuthenticHandler}>Authentic</Button>
                    <Button color="authentic2" style={{minWidth: "100px"}}></Button>
                    <Button color="authentic3" style={{minWidth: "100px"}}></Button>
                    <Button color="notAuthentic3" style={{minWidth: "100px"}}></Button>
                    <Button color="notAuthentic2" style={{minWidth: "100px"}}></Button>
                    <Button color="notAuthentic1">Not Authentic</Button>
                </ButtonGroup>    
            </ThemeProvider>
        </div>
    );
}

export default MapDashboardPage;