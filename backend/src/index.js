const express = require('express');
const cors = require('cors')
const admin = require('firebase-admin');
const serviceAccount = require('./configs/serviceAccountKey.json');
const { getFirestore } = require('firebase-admin/firestore')
const bodyParser = require('body-parser')

const port = 8080;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = getFirestore();

app.get('/', (req, res) => {
  const docs = [];
  db.collection('todo').get().then(data => data.docs.map(doc => docs.push({id: doc.id, desc: doc.data().desc, done: doc.data().done}))).then(() => res.json(docs)).catch(err => console.error(err));
});

app.post('/', (req, res) => {
    db.collection('todo').add({desc: req.body.desc, done: false}).then(_ => res.send('adicionado')).catch(err => console.error(err));
});

app.delete('/:id', (req, res) => {
    db.collection('todo').doc(req.params.id).delete().then(() => res.send('deletado')).catch(err => console.error(err));
});

app.put('/done/:id', (req, res) => {
    db.collection('todo').doc(req.params.id).set({done: !req.body.done}, {merge: true}).then(() => res.send('alterado')).catch(err => console.error(err));
})

app.put('/:id', (req, res) => {
  db.collection('todo').doc(req.params.id).set({desc: req.body.desc}, {merge: true}).then(() => res.send('descrição alterada')).catch(err => console.error(err));
})

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
