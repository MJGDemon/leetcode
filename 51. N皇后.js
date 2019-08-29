/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    var row = [];
    var col = [];
    var dia1 = [];
    var dia2 = [];
    var queue = [];
    var ans = [];
    var backtrack = function(i){
        for(var k = 0; k<n; k++){
            if(row[i] == undefined && col[k] == undefined && dia1[i+k] == undefined && dia2[n+i-k] == undefined){
                var tmp = [];
                for(var l = 0; l<n; l++)
                    tmp[l] = '.';
                tmp[k] = 'Q';
                queue.push(tmp.join(''));
                row[i] = 1;
                col[k] = 1;
                dia1[i+k] = 1;
                dia2[n+i-k] = 1;

                if(i+1 == n){
                    ans.push(queue);
                }else{
                    backtrack(i+1);
                }
                queue = queue.slice(0,queue.length-1);
                row[i] = undefined;
                col[k] = undefined;
                dia1[i+k] = undefined;
                dia2[n+i-k] = undefined;
            }

        }
    }

    backtrack(0);
    return ans;
};

