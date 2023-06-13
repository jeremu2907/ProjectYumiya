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
  console.log("Connected DB successfully");
});

dataBase.use(bodyparser.json())

function checkOrigin(r){
    // console.log(r)
    return (r !== undefined)? true:false
}

// dataBase.post('/setUserData', async (req,res) => {
//     const user = new userData(req.body)
//     await user.save()
//     console.log(req.body)
//     // res.send(user)
//     res.status(200)
// })

dataBase.post('/updateUserData', async (req, res) => {
    if(checkOrigin(req.get('origin'))){
        console.log("UPDATING USER DATA_______________")
        const doc = await userData.findOne({user: req.body.user});
        doc.user = req.body.user;
        doc.shortcutList = req.body.shortcutList;
        doc.noteList = req.body.noteList;
        await doc.save().then(savedDoc => 
            {
                if(savedDoc === doc) res.send(savedDoc);
            })
    } else {
        res.sendStatus(401)
    }
})

dataBase.get('/getUserData', async (req, res) => {
    if(checkOrigin(req.get('origin'))){
        const r = await userData.find({user:req.query.user});
        if(r.length === 0){
            console.log("No user found, creating new user in database")
            const newUser = new userData({user: req.query.user, shortcutList: "[]", noteList: "{\"noteContent\":[\"\"]}" });
            await newUser.save();
            res.json(newUser)
        } else {
            console.log("GETTING USER DATA________________")
            if(r[0].noteList === null){
                await userData.findOneAndDelete({user: req.query.user})
                const newUser = new userData({user: r[0].user, shortcutList: r[0].shortcutList, noteList: "{\"noteContent\":[\"\"]}"})
                await newUser.save();
                res.json(newUser);
            }
            else
                res.json(r[0])
        }
    } else {
        res.sendStatus(401)
    }
})

// dataBase.get('/seeAll', async (req, res) => {
//     const r = await userData.find();
//     console.log(r)
//     res.send(r)
// })

module.exports = dataBase;

