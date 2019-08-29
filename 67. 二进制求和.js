/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var len1 = a.length;
    var len2 = b.length;
    var len = Math.min(len1, len2);
    var carry = 0;
    var ans = [];
    for(var i = 0; i<len; i++){
        tmp = parseInt(a[len1-i-1])+parseInt(b[len2-i-1])+carry;
        carry = Math.floor(tmp/2);
        tmp = tmp%2; 
        ans.unshift(tmp);
    }
    if(len1>len){
        for(var i = len; i<len1; i++){
            tmp = parseInt(a[len1-i-1])+carry;
            carry = Math.floor(tmp/2);
            tmp = tmp%2; 
            ans.unshift(tmp);
        }
    }else if(len2>len){
        for(var i = len; i<len2; i++){
            tmp = parseInt(b[len2-i-1])+carry;
            carry = Math.floor(tmp/2);
            tmp = tmp%2; 
            ans.unshift(tmp);
        }
    }
    if(carry>0)
        ans.unshift(carry);
    return ans.join('')
};