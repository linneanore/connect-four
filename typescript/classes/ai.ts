import { Board } from "./board";

export class AI {
    private playerId: number;

    constructor(playerId:number) {
        this.playerId = playerId;
    }

    public getPlayerId(): number{
        return this.playerId;
    }

    //Method for AI to make move in random column
    public getMove(board: Board): number {
        const emptyColumns: number[] = [];
        const rows = board['rows'];
        for (let col = 0; col < 7; col++) {
            if (board['grid'] [rows - 1][col] === 0) {
                //If the column is not full
                emptyColumns.push(col); 
                // add it to list of empty columns
            }
        } 

        if (emptyColumns.length === 0) {
            throw new Error("No valid moves available");
        }
        
        const randomIndex = Math.floor(Math.random() * emptyColumns.length);
        //Randomly select a column thats empty
        const selectedColumn = emptyColumns[randomIndex];

        console.log(`AI (Player ID: ${this.playerId}) has selected column:
    ${selectedColumn}`);

    return selectedColumn;
    }
}