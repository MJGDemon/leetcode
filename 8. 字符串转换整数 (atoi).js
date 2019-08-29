/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var s = '';
    for(var i = 0; i<str.length; i++){
        if(str[i] != ' '){
            if(str[i] == '+' || str[i] == '-' || !isNaN(str[i])){
                s+=str[i++];
                while(i<str.length){
                    if(!isNaN(str[i]))
                        s+=str[i++];
                    else
                        break;
                }
                break;
            }
            else{
                return 0;
            }
        }
    }
    console.log(s)
    var ans = parseInt(s);
    if(isNaN(ans))
        return 0;
    if(ans<(0-Math.pow(2,31))){
        return (0-Math.pow(2,31))
    }else if(ans > (Math.pow(2,31)-1))
        return (Math.pow(2,31)-1)
    else
        return ans;
};

myAtoi('+ 123')