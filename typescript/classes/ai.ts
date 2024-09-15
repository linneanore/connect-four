import { board } from "./board";

export class AI {
    private playerID: number;

    constructor(playerId:number) {
        this.playerId = playerId;
    }

    //Method for AI to make move in random column
    public getMove(board: board): number {
        const emptyColumns: number[] = [];
        for (let col = 0; col < 7; col++) {
            if (board['grid'] [0] [col] === 0) {
                //If the column is not full
                emptyColumns.push(col); 
                // add it to list of empty columns
            }
        } 
        const randomIndex = Math.floor(Math.random() * emptyColumns.length);
        //Randomly select an empty column
        return emptyColumns[randomIndex]; 
    }
}