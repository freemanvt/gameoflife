/**
 * Created by vinhta on 02/01/2016.
 */
var assert = require('chai').assert;
var GameOfLife = require('./../GameOfLife.js');

describe('game of life tests', function() {
    var gameoflife;
    var board;
    it('get _board', function() {
        gameoflife = new GameOfLife(10, 10);
        // get a game of life _board
        board = gameoflife.getBoard();
        assert.isNotNull(board);
        assert.isDefined(board);

        // get the _board size which should be 10 x 10
        assert.equal(board.getXSize(), 10, '_board X size should be 10');
        assert.equal(board.getYSize(), 10, '_board Y size should be 10');

        // print the _board out
        var boardPrinted = '[0][0][0][0][0][0][0][0][0][0]\n'
                         + '[0][0][0][0][0][0][0][0][0][0]\n'
                         + '[0][0][0][0][0][0][0][0][0][0]\n'
                         + '[0][0][0][0][0][0][0][0][0][0]\n'
                         + '[0][0][0][0][0][0][0][0][0][0]\n'
                         + '[0][0][0][0][0][0][0][0][0][0]\n'
                         + '[0][0][0][0][0][0][0][0][0][0]\n'
                         + '[0][0][0][0][0][0][0][0][0][0]\n'
                         + '[0][0][0][0][0][0][0][0][0][0]\n'
                         + '[0][0][0][0][0][0][0][0][0][0]\n';

        assert.equal(board.printBoard(), boardPrinted);

    });

    it('set and get cell on _board', function() {
        // set the cell at 1, 1, on
        board.setCell(1,1,true);
        // check if the cell is on;
        assert.ok(board.getCell(1,1));
        // print the _board out
        var boardPrinted = '[1][0][0][0][0][0][0][0][0][0]\n'
            + '[0][0][0][0][0][0][0][0][0][0]\n'
            + '[0][0][0][0][0][0][0][0][0][0]\n'
            + '[0][0][0][0][0][0][0][0][0][0]\n'
            + '[0][0][0][0][0][0][0][0][0][0]\n'
            + '[0][0][0][0][0][0][0][0][0][0]\n'
            + '[0][0][0][0][0][0][0][0][0][0]\n'
            + '[0][0][0][0][0][0][0][0][0][0]\n'
            + '[0][0][0][0][0][0][0][0][0][0]\n'
            + '[0][0][0][0][0][0][0][0][0][0]\n';

        assert.equal(board.printBoard(), boardPrinted);
        console.log(board.printBoard());

        // set the cell at 10, 10, on
        board.setCell(10,10,true);
        // check if the cell is on;
        assert.ok(board.getCell(10,10));
        // print the _board out
        boardPrinted = '[1][0][0][0][0][0][0][0][0][0]\n'
            + '[0][0][0][0][0][0][0][0][0][0]\n'
            + '[0][0][0][0][0][0][0][0][0][0]\n'
            + '[0][0][0][0][0][0][0][0][0][0]\n'
            + '[0][0][0][0][0][0][0][0][0][0]\n'
            + '[0][0][0][0][0][0][0][0][0][0]\n'
            + '[0][0][0][0][0][0][0][0][0][0]\n'
            + '[0][0][0][0][0][0][0][0][0][0]\n'
            + '[0][0][0][0][0][0][0][0][0][0]\n'
            + '[0][0][0][0][0][0][0][0][0][1]\n';

        assert.equal(board.printBoard(), boardPrinted);
        console.log(board.printBoard());

        // set the cell at 10, 10, off
        board.setCell(10,10,false);
        // check if the cell is on;
        assert.notOk(board.getCell(10,10));
        // print the _board out
        boardPrinted = '[1][0][0][0][0][0][0][0][0][0]\n'
            + '[0][0][0][0][0][0][0][0][0][0]\n'
            + '[0][0][0][0][0][0][0][0][0][0]\n'
            + '[0][0][0][0][0][0][0][0][0][0]\n'
            + '[0][0][0][0][0][0][0][0][0][0]\n'
            + '[0][0][0][0][0][0][0][0][0][0]\n'
            + '[0][0][0][0][0][0][0][0][0][0]\n'
            + '[0][0][0][0][0][0][0][0][0][0]\n'
            + '[0][0][0][0][0][0][0][0][0][0]\n'
            + '[0][0][0][0][0][0][0][0][0][0]\n';

        assert.equal(board.printBoard(), boardPrinted);
        console.log(board.printBoard());

        // check if the cell is valid on the _board
        // cell 1,1 is valid
        assert.equal(board.isValidCell(1, 1), true);
        // cell 11,11 is an invalid cell
        assert.equal(board.isValidCell(11,11), false);

        //reset the _board
        boardPrinted = '[0][0][0][0][0][0][0][0][0][0]\n'
            + '[0][0][0][0][0][0][0][0][0][0]\n'
            + '[0][0][0][0][0][0][0][0][0][0]\n'
            + '[0][0][0][0][0][0][0][0][0][0]\n'
            + '[0][0][0][0][0][0][0][0][0][0]\n'
            + '[0][0][0][0][0][0][0][0][0][0]\n'
            + '[0][0][0][0][0][0][0][0][0][0]\n'
            + '[0][0][0][0][0][0][0][0][0][0]\n'
            + '[0][0][0][0][0][0][0][0][0][0]\n'
            + '[0][0][0][0][0][0][0][0][0][0]\n';
        board.resetBoard();
        assert.equal(board.printBoard(), boardPrinted);
    });

    it('get neighbours', function() {
        // set the cell at 1, 1, on
        board.setCell(1,1,true);
        // get the neighbours for a particular cell, for 1,1 that should return an array of 3 cells
        var neighbours = board.getNeighbours(1,1);
        assert.equal(neighbours.length, 3);

        // get the neighbours for a particular cell, for 2,2 that should return an array of 8 cells
        neighbours = board.getNeighbours(2,2);
        assert.equal(neighbours.length, 8);


        // set 1,1, 1,2, 2,1, 22 to '1', which mean 1,1 should have 3 neighbours set to 1
        board.setCell(1, 2, true);
        board.setCell(2, 1, true);
        board.setCell(2, 2, true);
        console.log(board.printBoard());

        var liveNeighbours = board.getNoOfLiveNeighbours(1,1);
        assert.equal(liveNeighbours, 3);



        // set 1,3, 2,3, 3,1, 3,2 3,3 to '1', which mean 2,2 should have 8 neighbours set to 1
        board.setCell(1, 3, true);
        board.setCell(2, 3, true);
        board.setCell(3, 1, true);
        board.setCell(3, 2, true);
        board.setCell(3, 3, true);
        console.log(board.printBoard());

        var liveNeighbours = board.getNoOfLiveNeighbours(2,2);

        assert.equal(liveNeighbours, 8);

    });

    it('Any live cell with fewer than two live neighbours dies, as if caused by underpopulation', function() {
        board.resetBoard();
        // set live cell 1,1
        // set live cell 2,2
        // 1,2 2,2 2,1 is dead
        // checking cell 1,1 means it should die because it has fewer than 2 lives neighbours
        board.setCell(1, 1, true);
        board.setCell(2, 2, true);

        console.log(board.printBoard());
        gameoflife.runOnce();
        console.log(board.printBoard());
        assert.equal(board.getCell(1,1), 0); // cell 1,1 should be dead

    });

    it('Any live cell with more than three live neighbours dies, as if by overcrowding.', function() {
        board.resetBoard();
        // set live cell 1,1
        // set live cell 2,2
        // set live 3,2
        // set live 3,3
        // checking cell 2,2 means it should die because it has more than 3 lives neighbours
        board.setCell(1, 1, true);
        board.setCell(2, 2, true);
        board.setCell(2, 3, true);
        board.setCell(3, 2, true);
        board.setCell(3, 3, true);

        console.log(board.printBoard());
        gameoflife.runOnce();
        console.log(board.printBoard());
        assert.equal(board.getCell(2,2), 0); // cell 1,1 should be dead

    });

    it('Any live cell with two or three live neighbours lives on to the next generation', function() {
        board.resetBoard();
        // set live cell 1,1
        // set live cell 2,2
        // set live 3,2
        // set live 3,3
        board.setCell(1, 1, true);
        board.setCell(2, 2, true);
        board.setCell(2, 3, true);
        board.setCell(3, 2, true);
        board.setCell(3, 3, true);

        console.log(board.printBoard());
        gameoflife.runOnce();
        console.log(board.printBoard());
        assert.equal(board.getCell(2,3), 1); //
        assert.equal(board.getCell(3,3), 1); //
        assert.equal(board.getCell(3,2), 1); //

    });


    it('Any dead cell with exactly three live neighbours becomes a live cell', function() {
        board.resetBoard();
        board.setCell(2, 3, true);
        board.setCell(3, 2, true);
        board.setCell(3, 3, true);

        console.log(board.printBoard());
        gameoflife.runOnce();
        console.log(board.printBoard());
        // 2,2 should come alive as it has 3 live cell around it
        assert.equal(board.getCell(2,2), 1, '2,2 should come alive as it has 3 live cell around it');

    });

});
