import { useState, useEffect } from 'react';

import MeetupList from '../components/meetups/MeetupList';

function AllMeetupsPage(props) {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setloadedMeetups] = useState([]);

    useEffect(() => {
        setIsLoading(true); 
        // simulate retrieving data from db
        setTimeout(() => {
            setIsLoading(false);
            setloadedMeetups(props.meetups);
            console.log("Loaded meetups from db");
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
                <h1>All Meetups</h1>
                <MeetupList meetups={loadedMeetups} />
            </section>
        )
    }
}

export default AllMeetupsPage;