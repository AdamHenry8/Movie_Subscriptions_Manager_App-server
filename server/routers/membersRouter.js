const express = require('express');
const membersBL = require('../models/membersBL');

const router = express.Router();
//Get All
router.route('/')
    .get(async function(req,resp)
    {
        let members = await membersBL.getAllMembers();
        return resp.json(members);
    });
//Get By ID
router.route('/:id')
    .get(async function(req,resp)
    {
        let memberId = req.params.id;
        let member = await membersBL.getMember(memberId);
        return resp.json(member);
    });
//Add a new member
router.route('/')
    .post(async function(req,resp)
    {
        let newMember = req.body;
        let status = await membersBL.addMember(newMember);
        return resp.json(status);
    });
//Update
router.route('/:id')
    .put(async function(req,resp)
    {
        let memberID = req.params.id;
        let updatedMember = req.body;
        let status = await membersBL.updateMember(memberID, updatedMember);
        return resp.json(status);
    });
//Delete
router.route('/:id')
    .delete(async function(req,resp)
    {
        let memberId = req.params.id;
        let status = await membersBL.deleteMember(memberId);
        return resp.json(status);
    });
module.exports = router;