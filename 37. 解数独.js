/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */




var solveSudoku = function(board) {
    var inbox = function(row,col){
        if(row<3){
            if(col<3)
                return 0;
            else if(col<6)
                return 1;
            else
                return 2;
        }else if(row<6){
            if(col<3)
                return 3;
            else if(col<6)
                return 4;
            else
                return 5;
        }else if(row<9){
            if(col<3)
                return 6;
            else if(col<6)
                return 7;
            else
                return 8;
        }
    }

    var backtrack = function(i,j){
        if(board[i][j] == '.'){
            for(var k = 1; k<10; k++){
                
                if(row[i][k] != 1 && col[j][k] != 1 && box[inbox(i,j)][k] != 1){
                    row[i][k] = 1;
                    col[j][k] = 1;
                    box[inbox(i,j)][k] = 1;
                    board[i][j] = k.toString();

                    if((i == 8 && j == 8)){
                        end = true;
                    }else {
                        if(j == 8){
                            backtrack(i+1,0);
                        }else {
                            backtrack(i,j+1);
                        }
                    }
                    if(end == false){
                        row[i][k] = 0;
                        col[j][k] = 0;
                        box[inbox(i,j)][k] = 0;
                        board[i][j] = '.'
                    }
                }  
            }
        }else {
            if((i == 8 && j == 8)){
                end = true;
            }else {
                if(j == 8){
                    backtrack(i+1,0);
                }else {
                    backtrack(i,j+1);
                }
            }
        }
    }
   var row = [];
   var col = [];
   var box = [];
   var end = false;
   for(var i = 0; i<9; i++){
       row[i] = [];
       col[i] = [];
       box[i] = [];
   }
   for(var i = 0; i<9; i++){
       for(var j = 0; j<9; j++){
           if(board[i][j] != '.'){
               row[i][board[i][j]] = 1;
               col[j][board[i][j]] = 1;
               box[inbox(i,j)][board[i][j]] = 1;
           }
       }
   } 
   backtrack(0,0);
};