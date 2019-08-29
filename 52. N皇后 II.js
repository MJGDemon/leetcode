/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    var ans = 0;
    var row = [];
    var col = [];
    var dia1 = [];
    var dia2 = [];
    var queue = 0;
    var backtrack = function(i){
        for(var j = 0; j<n; j++){
            if(row[i] == undefined && col[j] == undefined && dia1[i+j] == undefined && dia2[n+i-j] == undefined){
                row[i] = 1;
                col[j] = 1;
                dia1[i+j] = 1;
                dia2[n+i-j] = 1;
                queue++;
                if(i+1==n)
                    ans++;
                else
                    backtrack(i+1);
                queue--;
                row[i] = undefined;
                col[j] = undefined;
                dia1[i+j] = undefined;
                dia2[n+i-j] = undefined;
            }

        }
    }

    backtrack(0);
    return ans;
};