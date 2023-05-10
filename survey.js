const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const person = {};



rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  person["Name"] = answer;


  rl.question("What's an activity you like doing? ", (answer) => {
    person["Activity"] = answer;


    rl.question("What do you listen to while doing that?? ", (answer) => {
      person["ListeningTo"] = answer;


      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
        person["FavoriteMeal"] = answer;


        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          person["FavoriteFood"] = answer;


          rl.question("Which sport is your absolute favourite? ", (answer) => {
            person["FavoriteSport"] = answer;
            

            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              person["Superpower"] = answer;

              console.log(person);
              rl.close();
              
            });
          });
        });
      });
    });
  });
});