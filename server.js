require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())
app.use(cors())
// app.use(express.urlencoded({ extended:true}))


app.all('/test', (req, res) => {
    res.send(req, query);
});

const tradeRouter = require('./routes/trade.route');
app.use('/trade', tradeRouter);

app.use((req, res, next) => {
    const err = new Error("Not Found")
    err.status = 404
    next(err)
});

app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    });
});


app.listen(9000, () => console.log("Server Started"))