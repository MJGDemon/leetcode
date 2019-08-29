/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows == 1)
        return s;
    var nums = [];
    for(var i = 0; i<numRows; i++){
        nums[i] = [];
    }
    var col = 0;
    var count = 0;
    while(count<s.length){
        if(col%(numRows-1) == 0){
            for(var i = 0; i<numRows; i++){
                nums[i][col] = s[count++];
                if(count>=s.length)
                    break;
            }
            col++;
        }else{
            nums[numRows-col%(numRows-1)-1][col] = s[count++];
            col++;
        }
    }

    var ans = '';
    for(var i = 0; i<numRows; i++){
        for(var j = 0; j<col; j++){
            if(nums[i][j] != undefined)
                ans = ans+nums[i][j];
        }
    }
    return ans;
};

