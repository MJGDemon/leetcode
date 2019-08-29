/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    var visit = [];
    var count = 0;
    var ans = false;
    for(var i = 0; i<board.length; i++)
        visit[i] = [];
    var backtrack = function(i,j){
        if(word[count] == board[i][j] && visit[i][j] != 1){
            visit[i][j] = 1;
            count++;
            if(count!=word.length){
                if(i!=board.length-1)
                    if(backtrack(i+1,j))
                        return true;
                if(i!=0)
                    if(backtrack(i-1,j))
                        return true;
                if(j!=board[0].length-1)
                    if(backtrack(i,j+1))
                        return true;
                if(j!=0)
                    if(backtrack(i,j-1))
                        return true;
            }
            else
                return true;
            visit[i][j] = 0;
            count--;
        }
    }
    for(var i = 0; i<board.length; i++)
        for(var j = 0; j<board[i].length; j++)
            if(board[i][j] == word[0]){
                ans = backtrack(i,j);
                if(ans == true)
                    return true;
            }
        return false;
};