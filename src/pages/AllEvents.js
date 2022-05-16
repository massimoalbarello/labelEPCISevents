import { useState, useEffect, useContext } from 'react';

import EventList from '../components/events/EventList';
import LabeledEventsContext from '../store/labeledEvents-context';


function AllEventsPage() {

    const [isLoading, setIsLoading] = useState(true);
    const labeledCtx = useContext(LabeledEventsContext);

    useEffect(() => {
        setIsLoading(true); 
        // simulate retrieving data from db
        setTimeout(() => {
            setIsLoading(false);
            console.log("Loaded events from db");
        }, 1000);
    }, [])

    if (isLoading) {
        return  (
            <section>
                <p>Loading...</p>
            </section>
        )
    }
    else {
        return (
            <section>
                <h1>All Events</h1>
                <EventList events={labeledCtx.unlabeledEvents} />;
            </section>
        )
    }
}

export default AllEventsPage;