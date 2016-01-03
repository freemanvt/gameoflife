## Game Of Life

My implementation for the Game Of Life

https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life

To run, clone to your desktop and enter

> node index

To create your own Game Of Life board. Do the following

```javascript
var GameOfLife = require('GameOfLife');
// you can pass in the number of rows and columns you want for the board
var gameoflife = new GameOfLife(10, 10);
```

You can seed the board by getting the board and using setCell on the cells you want to be alive

```javascript
// set some random cell
gameoflife.getBoard().setCell(1,1,true);
gameoflife.getBoard().setCell(2,2,true);
```

You can then use call runOnce continuously

e.g.

```javascript
setInterval(function() {
    gameoflife.runOnce();
    console.log(gameoflife.getBoard().printBoard() + "\n\n");
}, 1000);
```