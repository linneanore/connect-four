import { Game } from "./classes/game";
import { Player } from "./classes/player";
import prompt from 'prompt-sync';
import { AI } from "./classes/ai";

const promptSync = prompt();
console.log("Welcome to Connect Four");

//Getting names and choices
const player1Name = promptSync("Enter Player 1's name:");
const player2Choice = promptSync("Do you want to play against a friend (P) or a computer (A)? ");
const player1 = new Player(player1Name, 1); 
let player2: Player | AI;

//See if player 2 is a human or a computer
if(player2Choice.toLowerCase() === 'a') {
    //Create AI as player 2
    player2 = new AI(2);
} else {
    const player2Name = promptSync("Enter Player 2's name: ");
    //Creating player 2
    player2 = new Player(player2Name, 2);
}
// Creating new game
const game = new Game(player1, player2);
//Starting the game loop
game.play();