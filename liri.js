//Allows program to work. User needs their own .env for this to run
require("dotenv").config();
var fs=require("fs");
var keys = require("./keys.js");

//Imports keys into variable and access spotify
//console.log("TCL: keys", keys)
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
console.log("This is spotify", spotify);


console.log("Liri is a command line interface.\nShe has the ability to run the following commands:");
console.log("1. 'concert-this' followed by  'artist/band name'");
console.log("2. 'spotify-this-song'");

//Capturing user inputs and LIRI commands
var prepCommand = process.argv[2];
var supportCommand= process.argv.slice(3).join(" ");
    
// function concert-this();
//Sample command node liri.js concert-this <artist/band name here>
if (prepCommand == "concert-this") {
    console.log ("Your prep command was accepted!");
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

