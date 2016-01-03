/**
 * Created by vinhta on 02/01/2016.
 */
var Board = require('./Board');

function GameOfLife(xSize, ySize) {
    this.board = new Board(xSize, ySize);

}

GameOfLife.prototype.getBoard = function () {
    return this.board;
};

GameOfLife.prototype.runOnce = function() {
    var xSize = this.board.getXSize();
    var ySize = this.board.getYSize();
    var tempBoard = new Board(xSize, ySize); // create a new board to hold the new cell values after they changed
    for (var i = 0; i < xSize; i++) {
        for (var j = 0; j < ySize; j++) {
            var xx = i+1;
            var yy = j+1;

            var cell = this.board.getCell(xx, yy);
            var noOfLiveNeighbours = this.board.getNoOfLiveNeighbours(xx, yy);

            if (cell && noOfLiveNeighbours < 2) {
                tempBoard.setCell(xx, yy, false);
            } else if (cell && noOfLiveNeighbours > 3) {
                tempBoard.setCell(xx, yy, false);
            } else if (cell && (noOfLiveNeighbours === 2 || noOfLiveNeighbours === 3)) {
                tempBoard.setCell(xx, yy, true);
            } else if (!cell && noOfLiveNeighbours === 3) {
                tempBoard.setCell(xx, yy, true);
            } else {
                tempBoard.setCell(xx, yy, this.board.getCell(xx, yy));
            }

        }
    }
    this.board._board = tempBoard._board.slice();

};

module.exports = GameOfLife;
