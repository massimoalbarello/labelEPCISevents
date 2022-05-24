import { createContext, useState } from "react";

const EventContext = createContext({
    labeledEvents: [],
    unlabeledEvents: [],
    totalLabeledEvents: 0,
    collectionsBatch: {},
    apiKey: "",
    addLabeledEvent: (labeledEvent) => {},
    removeLabeledEvent: (eventId) => {},
    eventIsLabeled: (eventId) => {},
    setCollectionsBatch: (collectionsBatch) => {},
    setCollectionLabel: (collectionId, label) => {},
    addApiKey: (apiKey) => {},
});

export function EventContextProvider(props) {

    const [userLabeledEvents, setUserLabeledEvents] = useState([]);
    const [userUnlabeledEvents, setUserUnlabeledEvents] = useState([
        {
            id: 1,
            name: 'event 1',
            description: 'This is the first event',
            location: 'New York',
            date: '2020-01-01',
            time: '10:00',
            image: 'https://picsum.photos/200/300',
        },
        {
            id: 2,
            name: 'event 2',
            description: 'This is the second event',
            location: 'San Francisco',
            date: '2020-01-01',
            time: '10:00',
            image: 'https://picsum.photos/200/300',  
        }
    ]);
    const [userCollectionsBatch, setUserCollectionsBatch] = useState({});

    const [userApiKey, setUserApiKey] = useState("");

    function addLabeledEventHandler(labeledEvent) {
        setUserLabeledEvents((prevUserLabeledEvents) => {
            return prevUserLabeledEvents.concat(labeledEvent); 
        })
        setUserUnlabeledEvents((prevUserUnlabeledEvents) => {
            return prevUserUnlabeledEvents.filter((event) => {
                return event.id !== labeledEvent.id;
            })
        })
    }

    function removeLabeledEventHandler(removedEvent) {
        setUserLabeledEvents((prevUserLabeledEvents) => {
            return prevUserLabeledEvents.filter((event) => {
                return event.id !== removedEvent.id;
            })
        })
        setUserUnlabeledEvents((prevUserLabeledEvents) => {
            return prevUserLabeledEvents.concat(removedEvent); 

        })
    }

    function setCollectionsBatchHandler(collectionsBatch) {
        setUserCollectionsBatch(collectionsBatch);
    }

    function setCollectionLabelHandler(collectionId, label) {
        setUserCollectionsBatch((prevUserCollectionsBatch) => {
            return {
                ...prevUserCollectionsBatch,
                [collectionId]: {
                    ...prevUserCollectionsBatch[collectionId],
                    label: label
                }
            }
        })
    }

    function addApiKeyHandler(apiKey) {
        setUserApiKey(apiKey);
    }

    function eventIsLabeledHandler(eventId) {
        return userLabeledEvents.some((event) => {
            return event.id === eventId;
        })
    }

    const context = {
        labeledEvents: userLabeledEvents,
        unlabeledEvents: userUnlabeledEvents,
        totalLabeledEvents : userLabeledEvents.length,
        collectionsBatch: userCollectionsBatch,
        apiKey: userApiKey,
        addLabeledEvent: addLabeledEventHandler,
        removeLabeledEvent: removeLabeledEventHandler,
        eventIsLabeled: eventIsLabeledHandler,
        setCollectionsBatch: setCollectionsBatchHandler,
        setCollectionLabel: setCollectionLabelHandler,
        addApiKey: addApiKeyHandler,
    };


    return (
        <EventContext.Provider value={context }>
            {props.children}
        </EventContext.Provider>
    )
}

export default EventContext;