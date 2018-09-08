// Write code here to parse command line arguments and store them into variables
// Add code to print whether the user is searching for an actor or tv show, along with the name of the actor or tv show they are searching for

let parse_command_line = process.argv.slice(2);
let actors;
let tvShow;
if(parse_command_line !== actors){
    console.log('you are searching for a tv show');
}else if(parse_command_line === actors){
    console.log('you are searching for actor/actress');
}else{
    console.log("you have searched for " + parse_command_line + "what is that?");
}