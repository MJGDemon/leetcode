/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle == '')
        return 0;
    if(haystack == '')
        return -1;
    for(var i = 0; i<haystack.length; i++){
        for(var j = 0; j<needle.length; j++){
            if(haystack[i+j] != needle[j])
                break;
        }
        if(j==needle.length)
            return i;
    }
    return -1;
};