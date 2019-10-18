# LIRI
LIRI is a command line node app that takes in parameters and gives you back data. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface.

To retrieve the data that will power this app, you'll need to send requests using the `axios` package to the Bands in Town, Spotify and OMDB APIs. You'll find these Node packages crucial for proper app behavior. The package.json should take care of these dependencies. However to be abundantly clear, the following node package managers were used:

* [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)

* [Axios](https://www.npmjs.com/package/axios)

* You'll use Axios to grab data from the [OMDB API](http://www.omdbapi.com) and the [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)

* [Moment](https://www.npmjs.com/package/moment)

* [DotEnv](https://www.npmjs.com/package/dotenv)

Don't forget about your spotify keys!


## Commands!
* `concert-this`

* `spotify-this-song`

* `movie-this`

* `do-what-it-says`


## What Each Command Should Do

1. `node liri.js concert-this <artist/band name here>`

* This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

     * Name of the venue

     * Venue location

     * Date of the Event (use moment to format this as "MM/DD/YYYY")

2. `node liri.js spotify-this-song '<song name here>'`

* This will show the following information about the song in your terminal/bash window

     * Artist(s)

     * The song's name

     * A preview link of the song from Spotify

     * The album that the song is from

3. `node liri.js movie-this '<movie name here>'`

* This will output the following information to your terminal/bash window:

       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
     

