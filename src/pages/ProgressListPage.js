import { useEffect, useState } from "react";

import Collection from '../components/Collection';

export default function ProgressListPage() {

    const [collections, setCollections] = useState([]);

    useEffect(() => {
        // simulate retrieving data from db
        setTimeout(() => {
            setCollections([{
                name: "Collection 1",
                description: "This is a description for collection 1",
            },
            {
                name: "Collection 2",
                description: "This is a description for collection 2",
            },
            {
                name: "Collection 3",
                description: "This is a description for collection 3",
            }]);
        }, 2000);
    }, []);

    if (collections.length === 0) {
        return (
            <section> 
                <p>Loading...</p>
            </section>
        )
    }
    else {
        return (
            <section>
                {collections.map(collection => (
                    <Collection 
                        name={collection.name}
                        description={collection.description}
                    />
                ))}
            </section>
        );
    }  
}