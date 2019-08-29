/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var str = x.toString();
    str = str.split('').reverse().join('');
    var ans = parseInt(str);
    if(ans<(0-Math.pow(2,31)) || ans > (Math.pow(2,31)-1))
        return 0;
    else{
        if(x<0)
            return 0-ans;
        else
            return ans;
    }
};