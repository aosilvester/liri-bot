# LIRI BOT


## Description

**What is Liri?** Liri is a node-based programming that functions much like "Siri" or "Alexa". 

**How Does My Liri Work?** Liri is a command like node application that takes in four commands: 
* "concert-this" The "concert-this" command takes in the name of a band or musical group as an argument, and will display that group's next concert date. Due to the limitations of the bandsintown API, an error may occur if no tour date is scheduled for the band chosen by the user. Once executed, the command and returned information is logged in log.txt. You can activate this command by the following, and replacing the parentheses with your chosen band:
    * node liri.js concert-this "(argument)"
* "spotify-this" The "spotify-this" command works in a similar way to concert-this. It works by taking the song provided by the user and returning the album, artist, and a song clip, if available. Once executed, the command and returned information is logged in log.txt. You can activate this command by the following, and replacing the parentheses with your chosen song:
    * node liri.js spotify-this "(argument)"
* "movie-this" The "movie-this" command works by taking the movie selected by the user as an argument and returning the release year, IMDB rating, Rotten Tomatoes rating, origin country, available languages, plot, and actors. This information originates from the OMDB API. Once executed, the command and returned information is logged in log.txt. You can activate this command by the following, and replacing the parentheses with your chosen song:
    * node liri.js movie-this "(argument)"
* "do-what-it-says" the "do-what-it-says" command takes from the file random.txt. The information on that text file is read by Liri and runs the command given for the argument referenced in the document. You can activate this command by the following:
    * node liri.js do-what-it-says

**Demonstration**
click the following link for a demonstration video
https://drive.google.com/file/d/1BG-6xYw4-pH0IxFfgmi9Ty0t0ECA56S_/view


**Purpose of the Project**
The purpose of this project is teach and demonstrate the use of javaScript for back-end server use.

## Getting Started

### Dependencies
A command line terminal is the only necessary application needed to run this app. 

### Installing
Once downloaded, run the command "npm install" to download the necessary items for your package.json

### Executing program
The program is run through your command line terminal with the following:
    *node liri.js (command) "(argument)"


## Help
If there are any problems or issues with this app, please contact the author.

## Authors
My Portfolio was developed by Alex Silvester in 2018

You may contact Alex via email at (aosilvester@gmail.com) with any questions.

## Version History

* 0.1
    * Initial Release
