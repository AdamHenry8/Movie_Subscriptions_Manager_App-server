const Movie = require('./moviesModel');
const Subscription = require('./subscriptionsModel');

exports.getAllMovies = () => 
{
    return new Promise((resolve,reject) => 
    {
        Movie.find({}, function(err,movies)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(movies);
            }
        })
    })   
}

exports.getMovie = (id) => 
{
    return new Promise((resolve,reject) => 
    {
        Movie.findById(id, function(err,movie)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(movie);
            }
        })
    })   
}
exports.addMovie = (newMovie) => 
{
    return new Promise((resolve,reject) => 
    {
        Movie.create(newMovie, function(err)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve("movie was successfully created!");
            }
        })
    })   
}
exports.updateMovie = (id, updatedMovie) => 
{
    return new Promise((resolve,reject) => 
    {
        Movie.findByIdAndUpdate(id, updatedMovie, function(err)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve("movie was successfully updated!");
            }
        })
    })   
}

exports.deleteMovie = (id) => 
{
    return new Promise((resolve,reject) => 
    {
        Movie.findByIdAndDelete(id,function(err)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve("movie was deleted!");
            }
        })   
    })     
}



