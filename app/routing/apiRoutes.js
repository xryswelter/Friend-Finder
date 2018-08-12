let friends = require("../data/friends");
const path = require('path');

module.exports = (app) => {
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });
    app.post('/api/friends', (req, res) => {
        let body = req.body;
        //   body = JSON.stringify(body);
        console.log("body = " + body.newProfile);
        let result = friend(body)
        console.log(result);
        res.json(result);
    });

    // Logic for checking against survey
    function friend(body) {
        // Global
        let var1 = body.newProfile;
        let fResults = [];
        //friend calculator

        //Grabbing each friend
        for (let i = 0; i < friends.length; i++) {
            //Checking against each newProfile point
            let friendz = friends[i].newProfile;
            let fScore = 0;
            for (let j = 0; j < friendz.length; j++) {
                let echo = Math.abs(friendz[j] - parseInt(var1[j]));
                console.log(friendz[j], var1[j]);
                //reduce the values (took from internet)
                fScore += echo;
            }
            console.log('fs = '+fScore);
            fResults.push(fScore);
        }
        // Indexing using the Math.min function to find the lowest difference b/n user and friends
        console.log('fResults = ' + fResults)
        let index = fResults.indexOf(Math.min(...fResults));
        console.log('index'+index);
        //Return the location of the friends to be the best match 
        return friends[index];
    };
}