const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express()

app.use(cors("http://localhost:3000/"))
app.use(bodyParser.json());

let canSubmit;

const collections = {
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
}

app.get('/collections', function (req, res) {
    // todo: check the user api key in order to respond with the correct collections
    res.json(collections);
})

app.post('/collections/:collectionId', function (req, res) {
    console.log(`${req.params.collectionId} labeled as ${req.body.label}`);
    collections[req.params.collectionId]["label"] = req.body.label;
    canSubmit = true;
    Object.entries(collections).forEach(([key, collection]) => {
        if (collection.label === "unlabeled") {
            canSubmit = false;
        }
    });
    res.json({canSubmit});
})

app.listen(8000, function () {
    console.log('CORS-enabled web server listening on port 8000')
})