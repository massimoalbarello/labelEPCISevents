import { useState, useEffect } from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

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

    // console.log(props.api);

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

    function labeledAs100AuthenticHandler() {
        console.log(location.state.id + " labeled as 100% authentic");
        setCollectionLabel("100% authentic");
    }
    function labeledAs50AuthenticHandler() {
        console.log(location.state.id + " labeled as 50% authentic");
        setCollectionLabel("50% authentic");
    }
    function labeledAs20AuthenticHandler() {
        console.log(location.state.id + " labeled as 20% authentic");
        setCollectionLabel("20% authentic");
    }

    function labeledAs100NotAuthenticHandler() {
        console.log(location.state.id + " labeled as 100% not authentic");
        setCollectionLabel("100% not authentic");
    }
    function labeledAs50NotAuthenticHandler() {
        console.log(location.state.id + " labeled as 50% not authentic");
        setCollectionLabel("50% not authentic");
    }
    function labeledAs20NotAuthenticHandler() {
        console.log(location.state.id + " labeled as 20% not authentic");
        setCollectionLabel("20% not authentic");
    }

    function setCollectionLabel(label){
        axios.post('http://localhost:8000/collections/' + location.state.id, {
            label: label,
        })
        .then(function (response) {
            console.log(response);
            navigate('/progressList', { state: { canSubmit: response.data.canSubmit } });
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
                    <Button color="authentic1" onClick={labeledAs100AuthenticHandler}>Authentic</Button>
                    <Button color="authentic2" onClick={labeledAs50AuthenticHandler} style={{minWidth: "100px"}}></Button>
                    <Button color="authentic3" onClick={labeledAs20AuthenticHandler} style={{minWidth: "100px"}}></Button>
                    <Button color="notAuthentic3" onClick={labeledAs20NotAuthenticHandler} style={{minWidth: "100px"}}></Button>
                    <Button color="notAuthentic2" onClick={labeledAs50NotAuthenticHandler} style={{minWidth: "100px"}}></Button>
                    <Button color="notAuthentic1" onClick={labeledAs100NotAuthenticHandler}>Not Authentic</Button>
                </ButtonGroup>    
            </ThemeProvider>
        </div>
    );
}

export default MapDashboardPage;