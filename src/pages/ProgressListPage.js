import { useEffect, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import Collection from '../components/Collection';
import LabeledEventsContext from '../store/labeledEvents-context';

export default function ProgressListPage() {

    const location = useLocation();
    const labeledCtx = useContext(LabeledEventsContext);
    const [canSubmit, setCanSubmit] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state.requestBatch) {
            console.log("Requesting new batch");
            axios.get('http://localhost:8000/collections')
                .then((response) => {
                    // console.log(response.data);
                    labeledCtx.setCollectionsBatch(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        if (labeledCtx.totalLabeledCollections === 3) {
            // console.log("All collections labeled");
            setCanSubmit(true);
        }
    }, []);

    function submitHandler() {
        navigate('/');

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
                {canSubmit && <button onClick={submitHandler}>Submit</button>}
            </section>
        );
    }  
}