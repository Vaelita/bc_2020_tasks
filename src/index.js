import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import taskRoutes from './routes/tasks.js';
import labelRoutes from './routes/labels.js';
import commentRoutes from './routes/comments.js';
import mongoose from 'mongoose';

dotenv.config();


const app = express();

app.use(bodyParser.json());


// register external routes:
app.use('/tasks', taskRoutes);
app.use('/labels', labelRoutes);
app.use('/comments', commentRoutes);


app.get('/', (req, res) => {
    res.send('Yayy from express');
});

app.get('/tasks', (req, res) => {
    res.send('This is the tasks pagee');
})

mongoose.connect(
    process.env.MONGOOSE_CONNECTION_URL, 
    {useNewUrlParser: true, useUnifiedTopology: true}, 
    (err) => {
        if (err) {
            console.log('there was an error', err);
        } else {
            console.log('Connection successful');
        }
    });

app.listen(process.env.PORT);