/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    for(var i = 0; i<matrix.length; i++){
        for(var j = 0; j<matrix[0].length; j++){
            if(matrix[i][j] == 0){
                matrix[i][j] = -10000;
            }
        }
    }
    for(var i = 0; i<matrix.length; i++){
        for(var j = 0; j<matrix[0].length; j++){
            if(matrix[i][j] == -10000){
                for(var k = 0; k<matrix.length; k++){
                    if(matrix[k][j] != -10000)
                        matrix[k][j] = 0;
                }
                for(var k = 0; k<matrix[0].length; k++){
                    if(matrix[i][k] != -10000)
                        matrix[i][k] = 0;
                }
            }
        }
    }
    for(var i = 0; i<matrix.length; i++){
        for(var j = 0; j<matrix[0].length; j++){
            if(matrix[i][j] == -10000){
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
};
