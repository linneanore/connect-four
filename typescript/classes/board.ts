export class board {
    private grid: number[][];
    private readonly rows = 6;
    private readonly columns = 7;

    constructor() {
        this.grid = Array.from({ length: this.rows }, () =>
        Array(this.columns).fill(0));
    }

    //printing the current state of the board
    public printBoard(): void {
        console.clear();
        console.log("Current Board:");
        for (let row of this.grid.reverse()) {
            console.log(row.map(cell => (cell === 0 ? '.' : cell)).join(' '));
        }
        console.log('0 1 2 3 4 5 6');
    }
}