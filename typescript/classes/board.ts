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

    //Method to drop piece into column
    public dropPiece(column: number, player: number): boolean {
        for (let row = 0; row < this.rows; row++) {
            //Finding the first empty spot
            if (this.grid[row] [column] === 0) {
                //Places the players piece
                this.grid[row][column] = player;
                return true;
            }
        }
        //Cannot drop piece if column is full
        return false;
    }

    // Method checks if move is resulting in win
    public isWinningMove(player: number): boolean {
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.columns; col++) {
                //Checking all directions for winning combination
                if (
                    this.checkDirection(row, col, player, 1, 0) || //Horizontal
                    this.checkDirection(row, col, player, 0, 1) || //Vertical
                    this.checkDirection(row, col, player, 1, 1) || //Diagonal
                    this.checkDirection(row, col, player, 1, -1) //Diagonal
                ) {
                    return true;
                }
            }
        }
        return false;
    }
}