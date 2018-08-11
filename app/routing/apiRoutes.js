let friends = require("../data/friends");
const path = require('path');

module.exports = (app) => {

    app.post('/api/match', (req, res) => {
        let body = req.body;
        console.log(body);
        let result = friend(body)
        res.send(result);
    });


    // Logic for checking against survey
    function friend(body) {
        // Global
        console.log("string!!!",body)
        let var1 = body.newProfile;
        let fResults = [];
        //friend calculator
        friends.forEach(element => {
            let diff = [];
            let var2 = element.newProfile;
            let i = 0;
            while (i < newProfile.length) {

                if (var1[i] !== var2[i]) {
                    let difference = Math.abs(parseInt(var1[i] - var2[i]));
                    diff.push(difference)
                } else {
                    diff.push(0)
                }
                i++
            }
            //Reducing to find best friend values
            myFunction(diff);
            function getSum(total, num) {
                return total + num;
            }
            function myFunction(item) {
                let pResults = diff.reduce(getSum);
                fResults.push(pResults)
            }
        });
        //Sorting then finding index of best friend
        let sort = fResults.sort();
        let index = fResults.indexOf(sort[0]);
        return friends[index];
    }
}