# LIRI BOT


## Description

**What is Liri?** Liri is a node-based programming that functions much like "Siri" or "Alexa", which is to say, can 

**How Does My Liri Work?** Liri is a command like node application that takes in four commands: 
* "concert-this" The "concert-this" command takes in the name of a band or musical group as an argument, and will display that group's next concert date. Due to the limitations of the bandsintown API, an error may occur if no tour date is scheduled for the band chosen by the user. You can activate this command by the following, and replacing the parentheses with your chosen band:
    * node liri.js "(argument)"
* "spotify-this" The "spotify-this" command works in a similar way to concert-this. It works by taking the song provided by the user and returning the album, artist, and a song clip, if available. you can activate this command by the following, and replacing the parentheses with your chosen song:
    * node liri.js "(argument)"
* "movie-this" The "movie-this" command works by taking the movie selected by the user as an argument and returning the release year, IMDB rating, Rotten Tomatoes rating, origin country, available languages, plot, and actors. This information originates from the OMDB API. you can activate this command by the following, and replacing the parentheses with your chosen song:
    * node liri.js "(argument)"


**Purpose of the Project**
The purpose of this project is teach and demonstrate the use of javaScript for back-end server use.

## Getting Started

### Dependencies
A command line terminal is the only necessary application needed to run this app. 

### Installing
Once downloaded, run the command "npm install" to download the necessary items for your package.json

### Executing program
The program is run through your command line terminal with the following command:
    *node liri.js "(argument)"


## Help
If there are any problems or issues with this app, please contact the author.

## Authors
My Portfolio was developed by Alex Silvester in 2018

You may contact Alex via email at (aosilvester@gmail.com) with any questions.

## Version History

* 0.1
    * Initial Release
