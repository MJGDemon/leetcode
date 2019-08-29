/**
 * @param {character[][]} matrix
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    var fun = function(l,r){
        if(l>r)
            return 0;
        var min = l;
        for(var i = l; i<=r; i++)
            if(heights[min] > heights[i])
                min = i;
        return Math.max(heights[min] * (r-l+1), Math.max(fun(l,min-1),fun(min+1,r)))
    }
    return fun(0,heights.length-1);
};

var maximalRectangle = function(matrix) {
    if(matrix.length == 0)
        return 0;
    var ans = 0;
    var matrix2 = [];
    for(var i = 0; i<matrix.length; i++)
        matrix2[i] = [];
    for(var i = 0; i<matrix[0].length; i++)
        for(var j = 0; j<matrix.length; j++){
            if(matrix[j][i] == 0)
                matrix2[j][i] = 0;
            else{
                if(j == 0)
                    matrix2[j][i] = 1;
                else    
                    matrix2[j][i] = matrix2[j-1][i] + 1;
            }
        }
    for(var i = 0; i<matrix2.length; i++){
        ans = Math.max(largestRectangleArea(matrix2[i]),ans);
    }
    return ans;
};