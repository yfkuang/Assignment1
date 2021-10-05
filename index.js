//require express
const express = require('express');

//init express app
const app = express();

//specify port to listen
const port = 9000;

// API / urls
app.get('/', (req, res) => {
    res.send("Sports Facts");
});

app.get('/api/nba', (req, res) => {

    //return dummy data
    const nba = ["Wilt Chamberlain scored 100 points in a single game", "Devin Booker is the youngest player to score over 70 points", "Derrick Rose is the youngest player to win MVP", "Giannis Antetokounmpo averaged 35/13/5 in the finals 2 weeks after hyper-extending his knee", "Lebron James has appeared in the finals 10 times (2007, 2011, 2012, 2013, 2014, 2015, 2016, 0217, 2018, 2020", "Joe Harris shot a season-best 47.4% from 3pt on 5.1 attempts during the 2018-2019", "Steve Kerr is a 5-time NBA champion as a player and 3-time NBA champion as a coach", "If Steph Curry missed his next 1000 3PA, his career 3P% would still be higher than James Harden's", "For five consecutive seasons, Manute Bol blocked more than 10% of all two-point shots attempted while he was on the floor."];

    //Send in JSON
    res.send(JSON.stringify(nba));
});

app.get('/api/mma', (req, res) => {

    //return dummy data
    const mma = ["Jorge Masvidal has fastest knockout in the UFC at 6 seconds", "Khamzat Chimaev absorbed only 2 strikes in 3 UFC bouts", "Khamzat has been in more UFC fights than strikes he’s absorbed", "Khamzat holds the record for both the fastest consecutive winning streak and fastest 3 fight winning streak, at 10 days and 66 days respectively", "Khabib Nurmagomedov went undefeated professionally 29-0 before retiring as the UFC Lightweight Champion", "Max Holloway breaks his own record of 290 for strikes landed in a UFC fight with a new record of 447", "Georges St Pierre defended his title 9 times after losing it once and set the record for most consecutive wins in the Welterweight division", "Anderson Silva retained the middleweight UFC belt for 2,457 days, from 2006 to 2013", "On July 12, 2020, The UFC Champions helf a combined record of 206-16, the highest win-loss ratio for champions", "Javier Mendez has trained 4 UFC champions", ];

    //Send in JSON
    res.send(JSON.stringify(mma));
});

//run express http server on specified port
app.listen(port, () => {
    console.log("Listening on port", port);
});