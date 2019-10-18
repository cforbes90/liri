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
console.log("2. 'spotify-this-song' followed by 'song name'");
console.log("3. 'movie-this' followed by 'movie title' ");
console.log("4. 'do-what-it-says' ");

//Capturing user inputs and LIRI commands
var prepCommand = process.argv[2];
var supportCommand = process.argv.slice(3).join(" ");

// function concert-this();
//Sample command node liri.js concert-this <artist/band name here>
if (prepCommand == "concert-this") {
    console.log("Your prep command for concert-this was accepted!");
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
        .search({ type: 'track', query: supportCommand, limit: 5 })
        .then(function (response) {
            // console.log("The following are the artists");
            // console.log(response.tracks.items[0].artists);
            for (let i = 0; i < response.tracks.items.length; i++) {
                let song = response.tracks.items[i];
                let artistsStr = ""

                for (let i = 0; i < song.artists.length; i++) {
                    if (i !== 0) {
                        artistsStr += ", " + song.artists[i].name;
                    } else {
                        artistsStr = song.artists[i].name;
                    }
                }
                console.log("--------------");
                console.log("Artists: ", artistsStr);
                console.log("Song name: ", song.name);
                console.log("Song link: ", song.external_urls.spotify);
                console.log("Album name: ", song.album.name);
                // console.log(response.tracks);
                // console.log(response.tracks);
                console.log("--------------");
            }
        })
        .catch(function (err) {
            console.log(err);
        });

}
// Sample command node liri.js movie-this '<movie name here>'
if (prepCommand == "movie-this") {
    console.log("You are in movie-this!");
    axios.get("http://www.omdbapi.com/?t=" + supportCommand + "&y=&plot=short&apikey=trilogy").then(
        function (response) {
            //   console.log('response:', response)
            console.log("--------------");
            console.log("Movie Title:", response.data.Title);
            console.log("Year Released:", response.data.Year);
            console.log("IMDB Rating:", response.data.imdbRating);
            console.log("Rotten Tomatoes Rating:", response.data.Ratings[1].Value);
            console.log("Production Country:", response.data.Country);
            console.log("Language:", response.data.Language);
            console.log("Plot:", response.data.Plot);
            console.log("Actors:", response.data.Actors);
            console.log("--------------");

        })
        .catch(function (error) { })

}
if (prepCommand == "do-what-it-says") {
}





