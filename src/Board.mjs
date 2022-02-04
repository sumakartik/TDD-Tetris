
export class Board {
  width;
  height;

  // PLAN
  // Manage the board state
  // add blocks
  // create board
  // prevent conflict
  // turn data into string

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.boardState = undefined;  // example [[...],[...],[...]]
  }

  drawCleanBoard(){

    this.boardState = new Array(this.width).fill('.').map(() => new Array(this.height).fill('.'));
  
  }

  toString() {
    // Input this.boardState
    // Output: string with line breaks
    if (this.boardState === undefined){this.drawCleanBoard()};
    
    let currentArray = this.boardState.map(x => x.join(''));
    currentArray = currentArray.join('\n')
    return currentArray + '\n';
  }

}

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