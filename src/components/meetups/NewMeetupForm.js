import { useRef } from 'react';

import Card from '../ui/Card';

function NewMeetupForm(props) {

    const idInputRef = useRef();
    const nameInputRef = useRef();
    const descriptionInputRef = useRef();
    const locationInputRef = useRef();
    const dateInputRef = useRef();
    const timeInputRef = useRef();
    const imageInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredId = idInputRef.current.value;
        const enteredName = nameInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
        const enteredLocation = locationInputRef.current.value;
        const enteredDate = dateInputRef.current.value;
        const enteredTime = timeInputRef.current.value;
        const enteredImage = imageInputRef.current.value;

        const meetupData = {
            id: enteredId,
            name: enteredName,
            description: enteredDescription,
            location: enteredLocation,
            date: enteredDate,
            time: enteredTime,
            image: enteredImage
        };

        props.onAddMeetup(meetupData);
    }

    return (
        <Card>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="id">Meetup Id</label>
                    <input type="text" required id="id" ref={idInputRef}/>
                </div>
                <div>
                    <label htmlFor="name">Meetup Name</label>
                    <input type="text" required id="name" ref={nameInputRef}/>
                </div>
                <div>
                    <label htmlFor="description">Meetup Description</label>
                    <textarea required id="description" rows="5" ref={descriptionInputRef} />
                </div>
                <div>
                    <label htmlFor="location">Meetup Location</label>
                    <input type="text" required id="location" ref={locationInputRef} />
                </div>
                <div>
                    <label htmlFor="date">Meetup Date</label>
                    <input type="text" required id="date" ref={dateInputRef} />
                </div>
                <div>
                    <label htmlFor="time">Meetup Time</label>
                    <input type="text" required id="time" ref={timeInputRef} />
                </div>
                <div>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" required id="image" ref={imageInputRef} />
                </div>
                <div>
                    <button>Create Meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm;