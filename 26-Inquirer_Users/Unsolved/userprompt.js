// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
var inquirer = require('inquirer');
inquirer
  .prompt([

         {
      type: "list",
      message: "What is your favorite junk food?",
      choices: ["Pizza", "Hot Dog", "Burger","All"],
      name: "food"
    },
      {
    type: "list",
    message: 'what is your favorite cuisine',
    choices:['American','Mexican','Indian','Chinese','Italian'],
    name:'regional food'
    },
    {
    type:'confirm',
    message:'Do you drink?',
    name:'drink'
      },
      {
    type: 'list',
    message:'what do you drink?',
    choices:['Straight Spirits','Wine','Beer','Cocktails'],
    name:'drinks'
      }
  ])
 
  .then(answers => {
      console.log(answers);
      console.log('yay food');
      
    
  });