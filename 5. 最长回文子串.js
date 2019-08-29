/**
 * @param {string} s
 * @return {string}
 */
var expandAroundCenter = function(s, l, r){
    while(l>=0 && r<s.length && s[l] == s[r]){
        l--;
        r++;
    }
    return r-l-1;
}
var longestPalindrome = function(s) {
    if(s.length==0)
        return '';
    var start = 0;
    var end = 0;
    for(var i = 0; i<s.length; i++){
        var len1 = expandAroundCenter(s,i,i);
        var len2 = expandAroundCenter(s,i,i+1);
        var len = Math.max(len1,len2);
        if(len > end - start){
            start = i - Math.floor((len - 1)/2);
            end = i + Math.floor(len/2);
        }
    }
    return s.slice(start,end+1);
};