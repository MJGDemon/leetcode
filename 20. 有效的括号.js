/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var str = []
    for(var i = 0; i<s.length;i++){
        if(str.length==0){
            str.push(s[i]);
        }else if(s[i] == ')'){
            if(str[str.length-1] == '('){
                str.pop()
            }else{
                str.push(s[i])
            }
        }else if(s[i] == ']'){
            if(str[str.length-1] == '['){
                str.pop();
            }else{
                str.push(s[i])
            }
        }else if(s[i] == '}'){
            if(str[str.length-1] == '{'){
                str.pop();
            }else{
                str.push(s[i])
            }
        }else{
            str.push(s[i]);
        }
        
    }
    if(str.length!=0)
        return false;
    else
        return true;
};