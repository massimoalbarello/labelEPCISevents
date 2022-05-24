import { useState, useEffect, useContext } from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

import MapComponent from '../components/MapComponent';
import LabeledEventsContext from '../store/labeledEvents-context';


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

    // console.log(props.api);

    const labeledCtx = useContext(LabeledEventsContext);

    const location = useLocation();
    // console.log(location.state.id);
    
    const [dashboardUrl, setDashboardUrl] = useState('');

    let navigate = useNavigate();

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
                // console.log(response);
                setDashboardUrl(response.ssoEmbedUrl);
            } );
    }, []);

    function labeledAsIdHandler(event) {
        const label = event.target.id
        setCollectionLabel(label);
    }

    function setCollectionLabel(label){
        axios.post('http://localhost:8000/collections/' + location.state.id, {
            label: label,
        })
        .then(function (response) {
            if (response.status === 204) {
                console.log(location.state.id + " labeled as " + label);
                labeledCtx.setCollectionLabel(location.state.id, label);
                navigate('/progressList', { state: { requestBatch: false } });
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return (
        <div>
            <MapComponent coordinates={[[70, 49], [30, 67], [3, 58], [69, 34], [92, 57]]}/>
            <iframe src={dashboardUrl} width="100%" height="1700px" />
            <ThemeProvider theme={labelsTheme}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button id="100% authentic" color="authentic1" onClick={labeledAsIdHandler}>Authentic</Button>
                    <Button id="50% authentic" color="authentic2" onClick={labeledAsIdHandler} style={{minWidth: "100px"}}></Button>
                    <Button id="20% authentic" color="authentic3" onClick={labeledAsIdHandler} style={{minWidth: "100px"}}></Button>
                    <Button id="20% not authentic" color="notAuthentic3" onClick={labeledAsIdHandler} style={{minWidth: "100px"}}></Button>
                    <Button id="50% not authentic" color="notAuthentic2" onClick={labeledAsIdHandler} style={{minWidth: "100px"}}></Button>
                    <Button id="100% not authentic" color="notAuthentic1" onClick={labeledAsIdHandler}>Not Authentic</Button>
                </ButtonGroup>    
            </ThemeProvider>
        </div>
    );
}

export default MapDashboardPage;