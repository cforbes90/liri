//Allows program to work. User needs their own .env for this to run
require("dotenv").config();
var fs = require("fs");
var axios = require("axios");
var keys = require("./keys.js");
var moment = require("moment");

//Imports keys into variable and access spotify
//console.log("TCL: keys", keys)
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
// console.log("This is spotify", spotify);


console.log("Liri is a command line interface.\nShe has the ability to run the following commands:");
console.log("1. 'concert-this' followed by  'artist/band name'");
console.log("2. 'spotify-this-song'");
console.log("3. 'movie-this'");
console.log("4. 'do-what-it-says' ");

//Capturing user inputs and LIRI commands
var prepCommand = process.argv[2];
var supportCommand = process.argv.slice(3).join(" ");

// function concert-this();
//Sample command node liri.js concert-this <artist/band name here>
if (prepCommand == "concert-this") {
    console.log("Your prep command was accepted!");
    axios
        .get("https://rest.bandsintown.com/artists/" + supportCommand + "/events?app_id=codingbootcamp")
        .then(function (response) {
            // If the axios was successful...
            // Then log the body from the site!
            console.log(response.data);
            console.log("The venue is: ", response.data[1].venue.name);
            // console.log(response.data[1].venue.name);
            console.log("Which is located in: ", response.data[1].venue.city + ", " + response.data[1].venue.region);
            // console.log(response.data[1].venue.city);
            console.log("The performance is scheduled for: ", moment(response.data[1].datetime).format("MM/DD/YYYY"));
            console.log("while ticket sales start: ", moment(response.data[1].on_sale_datetime).format("MM/DD/YYYY"));
            // console.log(response.data[1].datetime);


        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
        });
}
//Sample command node liri.js spotify-this-song <song name here>
if (prepCommand == "spotify-this-song") {
    console.log("You are in Spotify this song!");
    spotify
        .search({ type: 'track', query: supportCommand, limit:3 })
        .then(function (response) {
            console.log(response.tracks);
            console.log(response.tracks);
            console.log(response.tracks);
            console.log(response.tracks);
        })
        .catch(function (err) {
            console.log(err);
        });

}
if (prepCommand == "movie-this") {
}
if (prepCommand == "do-what-it-says") {
}
// function concertThis(artist);
// artist=supportCommand;


// function (spotify-this-song)
//movie-this
//do-what-it-says

// node liri.js concert-this <artist/band name here>

// This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"


// This Section Contains calls to external Modules
// make sure to perform npm install

// Load the "dotenv" package to make .env info readable.

