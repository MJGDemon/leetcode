/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(matrix.length == 0)
        return false;
    var count = 0;
    for(var i = 0; i<matrix.length; i++){
        if(matrix[i][matrix[i].length-1]==target)
            return true;
        else if(matrix[i][matrix[i].length-1]>target){
            count = i;
            break;
        }
    }
    var l = 0;
    var r = matrix[count].length-1;
    while(l<=r){
        var mid = Math.floor((l+r)/2);
        if(matrix[count][mid] == target)
            return true;
        else if(matrix[count][mid] < target){
            l = mid+1;
        }else{
            r = mid-1;
        }
    }
    return false;
};