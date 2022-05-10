import { useContext } from 'react';

import LabeledEventsContext from '../store/labeledEvents-context';
import EventList from '../components/events/EventList';

function LabeledEventsPage() {

    const labeledCtx = useContext(LabeledEventsContext);

    let content;
    
    if (labeledCtx.totalLabeledEvents === 0) {
        content = <p>There are no labeled events yet.</p>;
    }
    else {
        content = <EventList events={labeledCtx.labeledEvents} />;
    }
    return (
        <section>
            <h1>Labeled events</h1>
            {content}
        </section>
    );
}

export default LabeledEventsPage;