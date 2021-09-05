const Subscription = require('./subscriptionsModel');

exports.getAllSubscriptions = () => 
{
    return new Promise((resolve,reject) => 
    {
        Subscription.find({}, function(err,subscriptions)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(subscriptions);
            }
        }).populate({path: "member_id", select:['full_name','email']}).populate({path: "movie_id", select:['name','year_premiered']});
    })   
}



exports.getSubscription = (id) => 
{
    return new Promise((resolve,reject) => 
    {
        Subscription.findById(id, function(err,subscription)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(subscription);
            }
        }).populate({path: "movie_id", select:['name','year_premiered']})
    })   
}
exports.deleteSubscriptionByMovieId = (movieId) => 
{
    return new Promise((resolve,reject) => 
    {
        Subscription.deleteMany({movie_id: movieId}, function(err)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve("related subscriptions, too!");
            }
        })
    })   
}
exports.deleteSubscriptionByMemberId = (memberId) => 
{
    return new Promise((resolve,reject) => 
    {
        Subscription.deleteMany({member_id: memberId}, function(err)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve("related subscriptions, too!");
            }
        })
    })   
}
exports.getWatchedByMemberId = (memberId) => 
{
    return new Promise((resolve,reject) => 
    {
        Subscription.find({}, function(err,subs)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                let unwatchedSubs = subs.filter(x => x.member_id._id == memberId);
                resolve(unwatchedSubs);
            }
        }).populate({path: "movie_id", select:['name','year_premiered']});
    })   
}
exports.addNewSub = (newSub) => 
{
    return new Promise((resolve,reject) => 
    {
        Subscription.create(newSub, function(err)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve("a new subscription was successfully created!");
            }
        })
    })   
}



