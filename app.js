// ------------------------------------------------ +++ APP - CALCULATOR +++ --------------------------------------------------------------

//? import modules, custom error's, libraries we will need
// use express to create backend server
const express = require("express");
// user simple statistics to perform math operations
const ss = require("simple-statistics");
// use ExpressError as custom error class
const ExpressError = require("./expressError");
// use helper functions written in another module for readbility
const { strToNums, allNumbers } = require("./helpers");
// instantiate new express app
const app = express();

// app use json to parse the body as json
app.use(express.json());

// this line would parse the body data as form data if we had forms
// app.use(express.urlencoded({ extended: true }));

//? route handler's for GET req's TO ("/mean", "/median", "/mode") ? nums=1,2,3
app.get("/mean", function (req, res, next) {
  try {
    // get query string nums value from request object
    let numStr = req.query["nums"];
    if (!numStr) {
      const e = new ExpressError("Numbers are required", 400);
      next(e);
    }
    // split query string at "," attempt to change all array elements to numbers and returns array full of Number's or  NaN's
    numsArray = strToNums(numStr);

    // if array contains non Number  elements call the "next" error handler with a new custom error
    if (allNumbers(numsArray)) {
      const e = new ExpressError("Must use numbers only", 400);
      next(e);
    } else {
      // if array contains all Number elements figure out the mean fixed to two decimals
      const mean = ss.mean(numsArray).toFixed(2);
      // respond with JSON that looks like this
      return res.json({
        response: {
          operation: "mean",
          value: Number(mean),
        },
      });
    }
  } catch (e) {
    next(e);
  }
});

app.get("/median", function (req, res, next) {
  try {
    // get query string nums value from request object
    let numStr = req.query["nums"];
    if (!numStr) {
      const e = new ExpressError("Numbers are required", 400);
      next(e);
    }
    // split query string at "," attempt to change all array elements to numbers and returns array full of Number's or  NaN's
    numsArray = strToNums(numStr);

    // if array contains non Number  elements call the "next" error handler with a new custom error
    if (allNumbers(numsArray)) {
      const e = new ExpressError("Must use numbers only", 400);
      next(e);
    } else {
      // if array contains all Number elements figure out the mean fixed to two decimals
      const median = ss.median(numsArray).toFixed(2);
      // respond with JSON that looks like this
      return res.json({
        response: {
          operation: "median",
          value: Number(median),
        },
      });
    }
  } catch (e) {
    next(e);
  }
});

app.get("/mode", function (req, res, next) {
  try {
    // get query string nums value from request object
    let numStr = req.query["nums"];
    if (!numStr) {
      const e = new ExpressError("Numbers are required", 400);
      next(e);
    }
    // split query string at "," attempt to change all array elements to numbers and returns array full of Number's or  NaN's
    numsArray = strToNums(numStr);

    // if array contains non Number  elements call the "next" error handler with a new custom error
    if (allNumbers(numsArray)) {
      const e = new ExpressError("Must use numbers only", 400);
      next(e);
    } else {
      // if array contains all Number elements figure out the mean fixed to two decimals
      const mode = ss.mode(numsArray).toFixed(2);
      // respond with JSON that looks like this
      return res.json({
        response: {
          operation: "mode",
          value: Number(mode),
        },
      });
    }
  } catch (e) {
    next(e);
  }
});

//! error handling
// If NO other matching routes, app will always match this for every incoming request  to respond with a 404 Not Found
app.use((req, res, next) => {
  const e = new ExpressError("Page Not Found, does not exist on this server yet", 404);
  //   Pass that error to whatever's next should be error handler function
  next(e);
});

// Error handler for when we call next(error)
app.use(function (err, req, res, next) {
  //Note the 4 parameters!
  // the default status is 500 Internal Server Error
  let status = err.status || 500;
  let message = err.msg;

  // set the status and alert the user
  return res.status(status).json({
    error: { message, status },
  });
});

app.listen(3000, function () {
  console.log("listening at port 3000");
});
// ------------------------------------------------ +++ APP - CALCULATOR +++ --------------------------------------------------------------
