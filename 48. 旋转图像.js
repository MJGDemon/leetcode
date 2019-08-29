/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    for(var i = 0; i<matrix.length; i++){
        for(var j = 0; j<i; j++){
            [matrix[i][j],matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    for(var i = 0; i<matrix.length; i++){
        for(var j = 0; j<Math.floor((matrix[i].length)/2); j++){
            [matrix[i][j], matrix[i][matrix[i].length-j-1]] = [matrix[i][matrix[i].length-j-1],matrix[i][j]]
        }
    }
};