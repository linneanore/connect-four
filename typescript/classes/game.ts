import { board } from "./board";
import { player } from "./player";
import { AI } from "./ai";
import prompt from 'prompt-synq';

export class game {
    private board: board;
    private player1: player;
    private player2: player | AI;
    private currentPlayer: player | AI;
    private prompt: any;

    constructor(player1: player, player2, player | AI) {
        this.board = new board();
        this.player1 = player1;
        this.player2 = player2;
        this.currentPlayer = player1;
        this.prompt = prompt({ sigint: true });
    }

    //Game loop
    public play(): void {
        while (true) {
            //Print current board
            this.board.printBoard();
            //Getting column input from player or AI
            const columnInput = this.currentPlayer instanceof AI
            ? this.currentPlayer.getMove(this.board) // AI makes move
            : parseInt(this.prompt(`${this.currentPlayer.name}, choose a column (0-6): `), 10); //Player input

            //Validating the input
            if (isNaN(columnInput) || columnInput < 0 || columnInput > 6 || !this.board.dropPiece(columnInput, this.currentPlayer.id)) {
                console.log("Invalid move, please try again.");
                continue;
            }

            //Checking for winning move
            if (this.board.isWinningMove(this.currentPlayer.id)) {
                this.board.printBoard(); 
                //Announcing winner
                console.log(`${this.currentPlayer.name} wins!`);
                //Exiting the game
                break;
            }
        }
    }
}