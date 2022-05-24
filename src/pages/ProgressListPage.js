import { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import Collection from '../components/Collection';
import LabeledEventsContext from '../store/labeledEvents-context';

export default function ProgressListPage() {

    const location = useLocation();
    const labeledCtx = useContext(LabeledEventsContext);

    useEffect(() => {
        if (location.state.requestBatch) {
            console.log("\nRequesting new batch");
            axios.get('http://localhost:8000/collections')
                .then((response) => {
                    // console.log(response.data);
                    labeledCtx.setCollectionsBatch(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, []);

    function submitHandler() {
        console.log("Submitting labeled batch");
    }

    if (Object.entries(labeledCtx.collectionsBatch).length === 0) {
        return (
            <section> 
                <p>Loading...</p>
            </section>
        )
    }
    else {
        return (
            <section>
                {Object.entries(labeledCtx.collectionsBatch).map(([collectionId, collection]) => (
                    <Collection key={collectionId}
                        id={collectionId}
                        name={collection.name}
                        description={collection.description}
                        label={collection.label}
                    />
                ))}
            </section>
        );
    }  
}