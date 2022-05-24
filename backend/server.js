const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express()

app.use(cors("http://localhost:3000/"))
app.use(bodyParser.json());

let batchIndex = 0;
app.get('/collections', function (req, res) {
    console.log("\nNew batch requested");

    const collectionsBatches = [
        {
            'collectionId1': {
                name: "Collection 1",
                description: "This is a description for collection 1",
                label: "unlabeled",
            },
            'collectionId2': {
                name: "Collection 2",
                description: "This is a description for collection 2",
                label: "unlabeled",
            },
            'collectionId3': {
                name: "Collection 3",
                description: "This is a description for collection 3",
                label: "unlabeled",
            }
        },
        {
            'collectionId4': {
                name: "Collection 4",
                description: "This is a description for collection 4",
                label: "unlabeled",
            },
            'collectionId5': {
                name: "Collection 5",
                description: "This is a description for collection 5",
                label: "unlabeled",
            },
            'collectionId6': {
                name: "Collection 6",
                description: "This is a description for collection 6",
                label: "unlabeled",
            }
        },
        {
            'collectionId7': {
                name: "Collection 7",
                description: "This is a description for collection 7",
                label: "unlabeled",
            },
            'collectionId8': {
                name: "Collection 8",
                description: "This is a description for collection 8",
                label: "unlabeled",
            },
            'collectionId9': {
                name: "Collection 9",
                description: "This is a description for collection 9",
                label: "unlabeled",
            }
        },
        {
            'collectionId10': {
                name: "Collection 10",
                description: "This is a description for collection 10",
                label: "unlabeled",
            },
            'collectionId11': {
                name: "Collection 11",
                description: "This is a description for collection 11",
                label: "unlabeled",
            },
            'collectionId12': {
                name: "Collection 12",
                description: "This is a description for collection 12",
                label: "unlabeled",
            }
        },
        {
            'collectionId13': {
                name: "Collection 13",
                description: "This is a description for collection 13",
                label: "unlabeled",
            },
            'collectionId14': {
                name: "Collection 14",
                description: "This is a description for collection 14",
                label: "unlabeled",
            },
            'collectionId15': {
                name: "Collection 15",
                description: "This is a description for collection 15",
                label: "unlabeled",
            }
        },
        {
            'collectionId16': {
                name: "Collection 16",
                description: "This is a description for collection 16",
                label: "unlabeled",
            },
            'collectionId17': {
                name: "Collection 17",
                description: "This is a description for collection 17",
                label: "unlabeled",
            },
            'collectionId18': {
                name: "Collection 18",
                description: "This is a description for collection 18",
                label: "unlabeled",
            }
        },
        {
            'collectionId19': {
                name: "Collection 19",
                description: "This is a description for collection 19",
                label: "unlabeled",
            },
            'collectionId20': {
                name: "Collection 20",
                description: "This is a description for collection 20",
                label: "unlabeled",
            },
            'collectionId21': {
                name: "Collection 21",
                description: "This is a description for collection 21",
                label: "unlabeled",
            }
        }
    ]
    res.send(collectionsBatches[batchIndex]);
    batchIndex++;
})

app.post('/collections/:collectionId', function (req, res) {
    console.log(`${req.params.collectionId} labeled as ${req.body.label} stored on db`);
    res.sendStatus(204);
})

app.listen(8000, function () {
    console.log('CORS-enabled web server listening on port 8000')
})