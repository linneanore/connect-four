export class board {
    private grid: number[][];
    private readonly rows = 6;
    private readonly columns = 7;

    constructor() {
        this.grid = Array.from({ length: this.rows }, () =>
        Array(this.columns).fill(0));
    }
}