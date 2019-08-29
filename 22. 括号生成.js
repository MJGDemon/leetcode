/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var ans = [];
    loop(ans,'',0,0,n);
    return ans;
};

var loop = function(ans, str, l, r, max){
    if(str.length == max*2){
        ans.push(str);
        return;
    }else{
        if(l<max){
            loop(ans,str+'(',l+1,r,max)
        }
        if(r<l){
            loop(ans,str+')',l,r+1,max);
        }
    }
}