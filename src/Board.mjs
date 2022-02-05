// import { Block } from "/Block.mjs";

export class Board {
  width;
  height;

  // PLAN
  // Manage the board state
  // add blocks
  // create board
  // prevent conflict
  // turn data into string

  constructor(width=3, height=3) {
    this.width = width;
    this.height = height;
    this.boardState = undefined;  // example [[...],[...],[...]]
  }


  // creates the initial board
  drawCleanBoard(){
    this.boardState = new Array(this.width).fill('.').map(() => new Array(this.height).fill('.'));
  }

  // places a shape in the middle of the board in the top row.
  drop(blockObject){
    // place OBJ: block in middle of board.
    // console.log(this.boardState);
    // const width = this.boardState;
    // console.log(width);
    
    this.validateBoard();
    const middle = Math.ceil(this.width / 2) - 1;
    const construct = this.boardState;

    construct[0][middle] = blockObject;
    this.boardState = construct;

  }

  tick (){
    this.validateBoard();
    // read each line
      // if theres a shape, move it down one line
    let currentArray = this.boardState;
    
    for (i = currentArray.length; i > 0; i -= 1){
      
    }


  }
  // Checks to see if a board exists, create one if it doesn't.
  validateBoard(){
    if (this.boardState === undefined){
      console.log('Board constructed in current instance.');
      this.drawCleanBoard()
    }
    else{
      console.log(`Board Previously Constructed`);
    };
  }

  // reads the board state as a matrix, then prints it as a string.
  toString() {
    // Input this.boardState
    // Output: string with line breaks
    
    this.validateBoard();
    
    let currentArray = this.boardState.map(x => x.map( y => {if(typeof y === "object"){return y.shape}{return "."}}));
    currentArray = currentArray.map(x => x.join(''));
    
    currentArray = currentArray.join('\n');
    return currentArray + '\n';
  }

}

///////////////Falling Blocks
// let board = new Board(3,3 );
// board.drop(new Block('x'));
// console.log(board.toString());

/*
METHODS
drop - OBJ - adds new object to the board state
tick - VOID - 
hasFalling - Bool - detect if a block is still in motion


LOGIC
- if block below, top block doesn't drop any more
- only one block can drop at a time
- block stops moving when it hits the bottom
- can still move for one tick when above another block
- 
*/




/*
public String toString() {
        String s = "";
  for (int row = 0; row < rows; row++) {
    for (int col = 0; col < columns; col++) {
      s += "?";
    }
    s += "\n";
  }
  return s;
  */