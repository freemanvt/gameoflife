/**
 * Created by vinhta on 02/01/2016.
 */
var GameOfLife = require('./GameOfLife');

var gameoflife = new GameOfLife(10, 10);

// set some random cell
gameoflife.getBoard().setCell(1,1,true);
gameoflife.getBoard().setCell(2,2,true);
gameoflife.getBoard().setCell(2, 3, true);
gameoflife.getBoard().setCell(3, 2, true);
gameoflife.getBoard().setCell(3, 3, true);
gameoflife.getBoard().setCell(4, 4, true);
gameoflife.getBoard().setCell(4, 5, true);
gameoflife.getBoard().setCell(4, 6, true);
gameoflife.getBoard().setCell(5, 4, true);
gameoflife.getBoard().setCell(5, 6, true);
gameoflife.getBoard().setCell(6, 4, true);
gameoflife.getBoard().setCell(6, 5, true);
gameoflife.getBoard().setCell(6, 6, true);
console.log(gameoflife.getBoard().printBoard() + "\n\n");


setInterval(function() {
    gameoflife.runOnce();
    console.log(gameoflife.getBoard().printBoard() + "\n\n");
}, 1000);