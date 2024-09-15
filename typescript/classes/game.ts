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
}