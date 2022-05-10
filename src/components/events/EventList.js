import EventItem from './EventItem';

function EventList(props) {
    return (
        <ul>
            {props.events.map((event) => {
                return <EventItem key={event.id} {...event} />
            })}
        </ul>
    )
}

export default EventList;