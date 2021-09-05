const User = require('./usersModel');

exports.getAllUsers = () => 
{
    return new Promise((resolve,reject) => 
    {
        User.find({}, function(err,users)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(users);
            }
        })
    })   
}

exports.getUser = (id) => 
{
    return new Promise((resolve,reject) => 
    {
        User.findById(id, function(err,user)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(user);
            }
        })
    })   
}



