import express from 'express';
import connectDB from './utils/db.js';
import urlRoute from './routes/url.route.js'
import dotenv from 'dotenv';
dotenv.config({});

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/api', urlRoute);

app.listen(PORT, ()=> {
    console.log(`Server running at port ${PORT}`);
    connectDB();
})
