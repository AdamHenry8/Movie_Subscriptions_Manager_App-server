const express = require('express');
const moviesBL = require('../models/moviesBL');

const router = express.Router();
//Get All
router.route('/')
    .get(async function(req,resp)
    {
        let movies = await moviesBL.getAllMovies();
        return resp.json(movies);
    });
//Get By ID
router.route('/:id')
    .get(async function(req,resp)
    {
        let movieId = req.params.id;
        let movie = await moviesBL.getMovie(movieId);
        return resp.json(movie);
    });
//Add a new movie
router.route('/')
    .post(async function(req,resp)
    {
        let newMovie = req.body;
        let status = await moviesBL.addMovie(newMovie);
        return resp.json(status);
    });
//Update
router.route('/:id')
    .put(async function(req,resp)
    {
        let movieId = req.params.id;
        let updatedMovie = req.body;
        let status = await moviesBL.updateMovie(movieId, updatedMovie);
        return resp.json(status);
    });
//Delete
router.route('/:id')
    .delete(async function(req,resp)
    {
        let movieId = req.params.id;
        let status = await moviesBL.deleteMovie(movieId)
        return resp.json(status);
    });

    
module.exports = router;