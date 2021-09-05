const Member = require('./membersModel');

exports.getAllMembers = () => 
{
    return new Promise((resolve,reject) => 
    {
        Member.find({}, function(err,members)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(members);
            }
        })
    })   
}

exports.getMember = (id) => 
{
    return new Promise((resolve,reject) => 
    {
        Member.findById(id, function(err,member)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(member);
            }
        })
    })   
}

exports.addMember = (newMember) => 
{
    return new Promise((resolve,reject) => 
    {
        Member.create(newMember, function(err)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve("Member was successfully created!");
            }
        })
    })   
}
exports.updateMember = (id, updatedMember) => 
{
    return new Promise((resolve,reject) => 
    {
        Member.findByIdAndUpdate(id, updatedMember, function(err)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve("member was successfully updated!");
            }
        })
    })   
}

exports.deleteMember = (id) => 
{
    return new Promise((resolve,reject) => 
    {
        Member.findByIdAndDelete(id,function(err)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve("member was deleted!");
            }
        })   
    })     
}


