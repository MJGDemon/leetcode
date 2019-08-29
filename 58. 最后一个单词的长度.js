/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var str = s.split(' ');
    var len = str.length;
    while(len--){
        if(str[len] == ''){
            if(len==0)
                return 0;
            else
                continue;
        }else
            return str[len].length
    }
};