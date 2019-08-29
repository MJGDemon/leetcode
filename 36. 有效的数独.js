/**
 * @param {character[][]} board
 * @return {boolean}
 */

var fun = function(l,r,t,b,board){
    var set = new Set();
    for(var i = t; i<b; i++){
        for(var j = l; j<r; j++){
            if(!isNaN(board[i][j])){
                if(set.has(board[i][j]))
                    return false;
                else
                    set.add(board[i][j]);
            }
        }
    }
    return true;
}

var isValidSudoku = function(board) {
    for(var i = 0; i<9; i++){
        if(fun(0,9,i,i+1,board)==false)
            return false;
    }
    for(var i = 0; i<9;i++){
        if(fun(i,i+1,0,9,board)==false)
            return false;
    }
    for(var i = 0; i<3; i++){
        for(var j = 0; j<3; j++){
            if(fun(3*i,3*(i+1),3*j,3*(j+1),board) == false)
                return false;
        }
    }
    return true;
};
