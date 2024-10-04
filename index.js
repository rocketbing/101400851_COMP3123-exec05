const express = require('express');
const empRouter = require('./emp');
const app = express();
const userRouter = require('./users');
const errorHandleMiddleware = require('./errorHandlerMiddleware');
const SERVER_PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({extended:true}));

const loggerMiddleleware = (req,res,next) => {
    console.log(`Logged ${req.url} ${req.method} -- ${new Date()}`)
    next();
 }


 // Apply the middleware to all requests
app.use('/user',loggerMiddleleware);
app.use('/user',userRouter);
app.use('/emp',empRouter);



// Error end point
// http://localhost:3000/error
app.get('/error', (req,res) => {
    throw new Error('This is a forced error');
    res.send('Welcome to Express error handling');
});




app.use(errorHandleMiddleware);




app.listen(SERVER_PORT, () => {
    console.log('Server is running on port 3000!');
});

