const express = require('express');
const app = express();
const cors = require('cors');
const mongodb = require('mongodb')
const mongoose = require('mongoose');
const User = require('./models/Users')


// connect to mongodb
const MongoClient = mongodb.MongoClient;

mongoose.connect(
    'mongodb+srv://cypher:frm2qhppNkv27@cluster0.r8xhu.mongodb.net/usersDB?retryWrites=true&w=majority',
    { useUnifiedTopology: true, useNewUrlParser: true }
)


mongoose.connection.once('open', () => {
    console.log('MongoDB connection established')
})

const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.get('/users', (req, res) => {
    User.find((err, users) => {
        if(err){
            console.log(err)
        }else{
            res.json(users)
        }
    })
})

app.post('/create-user', (req, res) => {
    const user = new User(req.body)
    user.save().then((user) => {
        res.json(user)
    }).catch((err) => {
        res.status(500).send(err.message)
    })
})

app.get('user:id', (req, res) => {
    const id = req.params.id;
    User.findById(id, (err, user) => {
        res.json(user)
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})