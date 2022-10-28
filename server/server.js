const express = require('express');
const { listenerCount } = require('process');
const app = express();
const fetch = require('node-fetch');
const cors = require('cors');
require('dotenv').config();

app.use(cors())

app.get('/', (req,res) => {
    res.sendStatus(200);
    // console.log(process.env.CLIENT_ID)
    // console.log(process.env.API_KEY)
    // console.log(process.env.W_KEY)
})

app.get('/eta', async (req, res) => {
    let apiCall = "https://maps.googleapis.com/maps/api/distancematrix/json?destinations=Richardson,%20800%20Custer%20Parkway,%20Richardson,%20TX,%20USA&origins=5218BarcelonaDr,Garland,TX&key=AIzaSyC_kenObLSxyH_DyPx2nIV5eQIsNHDZtW0"
    fetch(apiCall).then((response)=>{
        return response.json()
    }).then(data =>{
        console.log(data)
        res.json(data)
    })
})

app.get('/id', (req, res) => {
    res.send({val1: process.env.CLIENT_ID, val2: process.env.API_KEY})
})

app.get('/wkey', (req, res) => {
    res.send({val: process.env.W_KEY})
})

app.listen(5000);