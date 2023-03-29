const express = require('express');
const admin = require('firebase-admin');
const serviceAccount = require('./configs/serviceAccountKey.json');
const { getFirestore } = require('firebase-admin/firestore')

const port = 8080;

const app = express();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = getFirestore();

app.get('/', (req, res) => {
  db.collection('todo').get().then(data => data.docs).then(docs => res.json(docs))
});

app.post('/', (req, res) => {
    db.collection('todo').add({teste: 'testando'}).then(_ => res.send('adicionado'))
})

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
