import { useNavigate } from 'react-router-dom';

import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupsPage(props) {

    const navigate = useNavigate();

    // needs access to a db
    // function addMeetupHandler(meetupData) {
    //     fetch(
    //         'url_db',
    //         {
    //             method: 'POST',
    //             body: JSON.stringify(meetupData),
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         }
    //     );        
    // }

    function saveAndClose(meetupData) {
        props.addMeetupHandler(meetupData); // call 'addMeetupHandler(meetupData)' instead, once the db is implemented
        navigate("/", { replace: true });
    }

    return <section>
        <h1>New Meetup</h1>
        <NewMeetupForm onAddMeetup={saveAndClose}/>
    </section>
}

export default NewMeetupsPage;