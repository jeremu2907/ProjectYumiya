const express = require('express');
const dataBase = express.Router();
const userData = require('./schema.js')
const bodyparser = require('body-parser')

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect(`mongodb+srv://jeremu2907:Password2907@cluster0.aaygtng.mongodb.net/?retryWrites=true&w=majority`)
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

dataBase.use(bodyparser.json())

dataBase.post('/setUserData', async (req,res) => {
    const user = new userData(req.body)
    await user.save()
    console.log(req.body)
    // res.send(user)
    res.status(200)
})

dataBase.post('/updateUserData', async (req, res) => {
    await userData.findOneAndDelete({user: req.body.user})
    console.log("UPDATING USER DATA_______________")
    console.log(await new userData(req.body).save())
    res.status(200)
})

dataBase.get('/getUserData', async (req, res) => {
    const r = await userData.find({user:req.query.user});
    if(r.length === 0){
        console.log("No user found, creating new user in database")
        const newUser = new userData({user: req.query.user, shortcutList: "[]", noteList: "{\"noteContent\":[\"\"]}" });
        await newUser.save();
        res.json(newUser)
    } else {
        console.log("GETTING USER DATA________________")
        console.log(r[0])
        res.json(r[0])
    }
})

dataBase.get('/seeAll', async (req, res) => {
    const r = await userData.find();
    console.log(r)
    res.send(r)
})

module.exports = dataBase;

