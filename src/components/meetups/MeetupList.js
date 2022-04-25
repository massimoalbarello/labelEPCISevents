import MeetupItem from './MeetupItem';

function MeetupList(props) {
    return (
        <ul>
            {props.meetups.map((meetup) => {
                return <MeetupItem key={meetup.id} {...meetup} />
            })}
        </ul>
    )
}

export default MeetupList;