/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n == 1)
        return '1';
    else{
        var str = countAndSay(n-1);
        var num = str[0];
        var count = 0;
        var ans = ''
        for(var i = 0; i<str.length; i++){
            if(str[i] == num){
                num = str[i];
                count++;
            }else{
                if(count!=0){
                    ans = ans + count + num;
                    num = str[i];
                    count = 1;
                }
            }
        }
        ans = ans + count + num;
        return ans;
    }
};