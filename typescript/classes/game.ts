import { Board } from "./board";
import { Player } from "./player";
import { AI } from "./ai";
import prompt from 'prompt-sync';

export class Game {
    private board: Board;
    private player1: Player;
    private player2: Player | AI;
    private currentPlayer: Player | AI;
    private prompt: any;

    constructor(player1: Player, player2: Player | AI) {
        this.board = new Board();
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
            if (

                isNaN(columnInput) ||
                columnInput < 0 ||
                columnInput > 6 ||
                !this.board.dropPiece(columnInput, this.currentPlayer instanceof Player ?
                    this.currentPlayer.id : -1)

            ) {
                console.log("Invalid move, try again.");
                continue;
            }

            //Checking for winning move
            if (this.currentPlayer instanceof Player && 
                this.board.isWinningMove(this.currentPlayer.id)) {
                    this.board.printBoard();
                    console.log(`${this.currentPlayer.name} wins!`);
                    break;
                
            }

            //Checking for a draw
            if (this.board.isFull()) {
                this.board.printBoard();
                console.log("It's a draw!");
                break;
            }

            //Switching to other player
           this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 :
           this.player1;
        }
    }
}