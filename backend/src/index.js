const express = require('express');
const cors = require('cors')
const admin = require('firebase-admin');
const serviceAccount = require('./configs/serviceAccountKey.json');
const { getFirestore } = require('firebase-admin/firestore')
const bodyParser = require('body-parser')

const port = 8080;

const app = express();

app.use(cors());
app.use(bodyParser.json());

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = getFirestore();

app.get('/', (req, res) => {
  const docs = [];
  db.collection('todo').get().then(data => data.docs.map(doc => docs.push({id: doc.id, desc: doc.data().desc, done: doc.data().done}))).then(() => res.json(docs));
});

app.post('/', (req, res) => {
    db.collection('todo').add({desc: req.body.desc, done: false}).then(_ => res.send('adicionado'))
})

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
