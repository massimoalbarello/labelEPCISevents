import { useContext } from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

import Card from '../ui/Card';
import LabeledEventsContext from '../../store/labeledEvents-context';

function EventItem(props) {

    const labeledCtx = useContext(LabeledEventsContext);
    const eventIsLabeled = labeledCtx.eventIsLabeled(props.id);
    let content;

    function labeledAsFakeHandler() {
        toggleLabeledEventstatusHandler("fake");
    }

    function labeledAsUnknownHandler() {
        toggleLabeledEventstatusHandler("?");
    }

    function labeledAsOriginalHandler() {
        toggleLabeledEventstatusHandler("original");
    }

    function toggleLabeledEventstatusHandler(label){
        if (eventIsLabeled) {
            labeledCtx.removeLabeledEvent({
                id: props.id,
                name: props.name,
                description: props.description,
                location: props.location,
                date: props.date,
                time: props.time,
                image: props.image,
                label: label
            });
        }
        else {
            labeledCtx.addLabeledEvent({
                id: props.id,
                name: props.name,
                description: props.description,
                location: props.location,
                date: props.date,
                time: props.time,
                image: props.image,
                label: label
            });
        }
    }

    
    if (!eventIsLabeled) {
        content = (          
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button onClick={labeledAsFakeHandler}>Fake</Button>
                <Button onClick={labeledAsUnknownHandler}>?</Button>
                <Button onClick={labeledAsOriginalHandler}>Original</Button>
            </ButtonGroup>   
        );
    }
    else {
        content = (
            <div>
                <p>{props.label}</p>
                <Button onClick={toggleLabeledEventstatusHandler}>Remove label</Button>
            </div>
        );
    }
    return (
        <div key={props.id}>
            <Card>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <p>{props.location}</p>
                <p>{props.date}</p>
                <p>{props.time}</p>
                <img src={props.image} alt={props.image} />
                {content}
            </Card>
        </div>
    )
}

export default EventItem;