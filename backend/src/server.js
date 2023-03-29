import express from 'express';

const port = 8080;

const app = express();

app.get('/', (req, res) => {
    res.send('OI');
});

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});