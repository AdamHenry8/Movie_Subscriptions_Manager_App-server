const express = require('express');
const usersBL = require('../models/usersBL');

const router = express.Router();

//Get All:
router.route('/')
    .get(async function(req,resp)
    {
        let users = await usersBL.getAllUsers();
        return resp.json(users);
    });
//Get By ID:
router.route('/:id')
    .get(async function(req,resp)
    {
        let userId = req.params.id;
        let user = await usersBL.getUser(userId);
        return resp.json(user);
    });

module.exports = router;