/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    var max= 0;
    var tmp = [];
    var str = [];
    for(var i = 0; i<s.length; i++){
        if(str.length == 0)
            str.push(i);
        else if(s[i] == ')'){
            if(s[str[str.length-1]] == '('){
                tmp.push(i);
                tmp.push(str[str.length-1]);
                str.pop();
            }
        }else if(s[i] == '('){
            str.push(i);
        }
    }
    tmp.sort((a,b) => a-b)
    var num = 0;
    for(var i = 0; i<tmp.length; i++){
        if(tmp[i] == tmp[i+1]-1){
            num++;
            if(num>max)
                max = num;
        }else
            num = 0;
    }
    if(max == 0)
        return 0;
    else
        return max+1;
};