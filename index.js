const express = require("express");

/// time stamp

let time = Date.now();
console.log(time);
let date = new Date();
let utc = date.toUTCString();
console.log("date", date);
console.log("utc", utc);
