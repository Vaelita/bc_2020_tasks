import express from 'express';
import dotenv from 'dotenv';

dotenv.config();


const app = express();


app.get('/', (req, res) => {
    res.send('Yayy from express');
});

app.get('/tasks', (req, res) => {
    res.send('This is the tasks pagee');
})

app.listen(process.env.PORT);