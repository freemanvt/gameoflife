/**
 * Created by vinhta on 02/01/2016.
 */
function Board(xSize, ySize) {
    this.xSize = xSize;
    this.ySize = ySize;
    // create our _board
    this._board = [];
    for (var i = 0; i < this.ySize; i++) {
        var row = [];
        for (var j = 0; j < this.xSize; j++) {
            row[j] = 0;
        }
        this._board[i] = row;
    }
}



/**
 * check if x is valid, if not valid return a valid x
 *
 * @param x
 * @returns {*}
 */
function checkX(x) {
    if (x < 0) {
        return 0;
    } else if (x > this.xSize - 1) {
        return this.xSize - 1;
    } else {
        return x;
    }
}

/**
 * check if y is valid, if not valid return a valid y
 *
 * @param y
 * @returns {*}
 */
function checkY(y) {
    if (y < 0) {
        return 0;
    } else if (y > this.ySize - 1) {
        return this.ySize - 1;
    } else {
        return y;
    }
}


Board.prototype.getXSize = function() {
    return this.xSize;
};

Board.prototype.getYSize = function() {
    return this.ySize;
};

Board.prototype.printBoard = function() {
    var string = '';
    for (var i = 0; i < this.ySize; i++) {
        var row = this._board[i];
        for (var j = 0; j < this.xSize; j++) {
            string += '[' + row[j] + ']';
        }
        string += '\n';
    }
    return string;
};

Board.prototype.setCell = function(x, y, bool) {
    var cell = 0;
    if (bool) {
        cell = 1;
    }
    var row = this._board[checkY(y-1)];
    row[checkX(x-1)] = cell;
};

Board.prototype.getCell = function(x, y) {
    var row = this._board[checkY(y-1)];
    return row[checkX(x-1)];
};

Board.prototype.isValidCell = function(x, y) {
    var xx = x-1;
    var yy = y-1;
    if (xx >= 0 && xx < this.xSize) {
        if (yy >= 0 && yy < this.ySize) {
            return true;
        }
    }
    return false;
};

Board.prototype.getNeighbours = function(x, y) {
    var xx = x-1;
    var yy = y-1;
    var neighbours = [];
    // start from top left and move clockwise
    var minX = xx -1;
    var maxX = xx + 1;
    var minY = yy -1;
    var maxY = yy + 1;
    for (var i = minX; i <= maxX; i++) {
        for (var j = minY; j <= maxY; j++) {
            // check if xx and yy is valid
            if (this.isValidCell(i+1, j+1)) {
                // check this isn't the original one we pass in
                if (!(i === xx && j === yy)) {
                    var cell = {
                        x : i,
                        y : j,
                        value : this.getCell(i+1, j+1)
                    };
                    neighbours.push(cell);
                }

            }
        }
    }
    return neighbours;
};

Board.prototype.getNoOfLiveNeighbours = function (x, y) {
    var neighbours = this.getNeighbours(x, y);
    var liveNeighbours = neighbours.filter(function (cell) {
        return cell.value;
    });
    return liveNeighbours.length;
};

Board.prototype.resetBoard = function () {
    for (var i = 0; i < this.ySize; i++) {
        for (var j = 0; j < this.xSize; j++) {
            (this._board[j])[i] = 0;
        }
    }
};




module.exports = Board;