const express = require('express');
const cors = require('cors');

const usersRouter = require('./routers/usersRouter');
const moviesRouter = require('./routers/moviesRouter');
const membersRouter = require('./routers/membersRouter');
const subscriptionsRouter = require('./routers/subscriptionsRouter');

let app = express();
app.use(cors());


require('./configs/database');

app.use(express.urlencoded({extended : true}));

app.use(express.json());

app.use('/api/users', usersRouter);
app.use('/api/movies', moviesRouter);
app.use('/api/members', membersRouter);
app.use('/api/subscriptions', subscriptionsRouter);

app.listen(8000);

