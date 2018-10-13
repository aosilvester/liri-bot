require("dotenv").config();
var keys = require("./keys.js");
var moment = require('moment');
var fs = require("fs");
var cmd = require('node-cmd');
var chalk = require('chalk');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var request = require('request')
var command = process.argv[2];
var argument = process.argv[3];
var bandsintown = require('bandsintown')("codingbootcamp");

for (i = 4; i < process.argv.length; i++) {
    argument += `+${process.argv[i]}`
}

if (command === "movie-this") {
    console.log("movie this")
}