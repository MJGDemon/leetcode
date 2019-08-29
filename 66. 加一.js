/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var end = digits.length-1;
    if(digits[end] != 9)
        digits[end]++;
    else{
        digits[end] = 0;
        for(var i = end; i>0; i--){
            if(digits[i] == 0)
                digits[i-1] = (digits[i-1]+1)%10;
            else
                break;
        }
        if(digits[0] == 0)
            digits.unshift(1);
    }
    return digits;
};