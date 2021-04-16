const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const cors = require('cors')
const posts = require('../model/posts')

router.use(cors())
router.get("/all", (req, res) => {
    res.json(posts.getAll())
})
router.post("/new", bodyParser.json(), (req, res) => {
    if (!req.body.firstName || typeof req.body.firstName == undefined || req.body.firstName == null) {
        res.status(400).send(error);
    }
    if (!req.body.lastName || typeof req.body.lastName == undefined || req.body.lastName == null) {
        res.status(400).send(error);
    }
    if (!req.body.participation || typeof req.body.participation == undefined || req.body.participation == null) {
        res.status(400).send(error);
    }
    if (req.body.firstName.length <= 2) {
        res.status(400).send(error);
    }
    if (req.body.lastName.length <= 2) {
        res.status(400).send(error);
    }
    if (req.body.participation <= 0) {
        res.status(400).send(error);
    } else {
        let firstName = req.body.firstName
        let lastName = req.body.lastName
        let participation = req.body.participation

        posts.newPost(firstName, lastName, participation)
        res.send("Post adicionado")
    }
})

module.exports = router