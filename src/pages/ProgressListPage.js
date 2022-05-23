import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import axios from "axios";

import Collection from '../components/Collection';

export default function ProgressListPage() {

    const location = useLocation();

    const [collections, setCollections] = useState({});
    let submitted;

    useEffect(() => {
        axios.get('http://localhost:8000/collections')
            .then(function (response) {
                // console.log(response.data);
                setCollections(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
        if (location.state) {
            console.log(location.state.canSubmit);
        }
    }, []);

    function submitHandler() {
        console.log("Submitted");
    }

    if (Object.entries(collections).length === 0) {
        return (
            <section> 
                <p>Loading...</p>
            </section>
        )
    }
    else {
        return (
            <section>
                {Object.entries(collections).map(([collectionId, collection]) => (
                    <Collection key={collectionId}
                        id={collectionId}
                        name={collection.name}
                        description={collection.description}
                        label={collection.label}
                    />
                ))}
                {location.state && location.state.canSubmit && (
                    <Button variant="contained" onClick={submitHandler}>Submit</Button>
                )}
            </section>
        );
    }  
}