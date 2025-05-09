const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 4000 ;
const mongoose = require("mongoose")
const mongoConnect = require('./config/mongoDB.config')
const courseRouter = require('./routes/corses.route')

app.use(morgan('dev'));
app.use(express.json());
app.use('/api/courses',courseRouter)

mongoConnect.connect();

mongoose.connection.once("open", () => {
    console.log("DB Connected");
    app.listen(port, (e) => {
        if (e) {
            console.log(e);
        }
        else {
            console.log(`Runs on port ${port}`);
        }
    });
});