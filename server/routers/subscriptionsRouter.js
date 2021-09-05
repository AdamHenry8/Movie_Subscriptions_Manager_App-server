const express = require('express');
const subscriptionsBL = require('../models/subscriptionsBL');

const router = express.Router();

//Get All (with member and movie data populated)
router.route('/')
    .get(async function(req,resp)
    {
        let subscriptions = await subscriptionsBL.getAllSubscriptions();
        return resp.json(subscriptions);
    });

//Get By ID
router.route('/:id')
    .get(async function(req,resp)
    {
        let subscriptionId = req.params.id;
        let subscription = await subscriptionsBL.getSubscription(subscriptionId);
        return resp.json(subscription);
    });
//Delete By MovieID
router.route('/movie/:id')
    .delete(async function(req,resp)
    {
        let movieId = req.params.id;
        let status = await subscriptionsBL.deleteSubscriptionByMovieId(movieId);
        return resp.json(status);
    });
//Delete By MemberID
router.route('/member/:id')
    .delete(async function(req,resp)
    {
        let memberId = req.params.id;
        let status = await subscriptionsBL.deleteSubscriptionByMemberId(memberId);
        return resp.json(status);
    });   
//get unwatched By MemberID
router.route('/member/:id')
    .get(async function(req,resp)
    {
        let memberId = req.params.id;
        let status = await subscriptionsBL.getWatchedByMemberId(memberId);
        return resp.json(status);
    }); 
//Add a new subscription
router.route('/')
    .post(async function(req,resp)
    {
        let newSub = req.body;
        let status = await subscriptionsBL.addNewSub(newSub);
        return resp.json(status);
    });

module.exports = router;