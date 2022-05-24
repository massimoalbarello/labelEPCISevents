import { createContext, useState } from "react";

const EventContext = createContext({
    labeledEvents: [],
    unlabeledEvents: [],
    totalLabeledEvents: 0,
    collectionsBatch: {},
    totalLabeledCollections: 0,
    apiKey: "",
    addLabeledEvent: (labeledEvent) => {},
    removeLabeledEvent: (eventId) => {},
    eventIsLabeled: (eventId) => {},
    setCollectionsBatch: (collectionsBatch) => {},
    setCollectionLabel: (collectionId, label) => {},
    resetTotalLabeledCollections: () => {},
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

    const [userTotalLabeledCollections, setUserTotalLabeledCollections] = useState(0);

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
            // console.log(prevUserCollectionsBatch[collectionId]['label']);
            if (prevUserCollectionsBatch[collectionId]['label'] === 'unlabeled') {
                setUserTotalLabeledCollections((userTotalLabeledCollections) => {
                    return userTotalLabeledCollections + 1;
                })
            }
            return {
                ...prevUserCollectionsBatch,
                [collectionId]: {
                    ...prevUserCollectionsBatch[collectionId],
                    label: label
                }
            }
        })
    }

    function resetTotalLabeledCollectionsHandler() {
        setUserTotalLabeledCollections(0);
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
        totalLabeledCollections: userTotalLabeledCollections,
        apiKey: userApiKey,
        addLabeledEvent: addLabeledEventHandler,
        removeLabeledEvent: removeLabeledEventHandler,
        eventIsLabeled: eventIsLabeledHandler,
        setCollectionsBatch: setCollectionsBatchHandler,
        setCollectionLabel: setCollectionLabelHandler,
        resetTotalLabeledCollections: resetTotalLabeledCollectionsHandler,
        addApiKey: addApiKeyHandler,
    };


    return (
        <EventContext.Provider value={context }>
            {props.children}
        </EventContext.Provider>
    )
}

export default EventContext;