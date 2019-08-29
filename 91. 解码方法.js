/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if(s[0] == '0')
        return 0;
    var dp = [1,1];
    var len = s.length;
    for(var i = 1; i<len; i++){
        if(s[i-1]!='0'){
            var num = (s[i-1] + s[i] | 0);
            if(num >=1 && num<= 26){
                if(s[i] != '0')
                    dp[i+1] = dp[i-1] + dp[i];
                else
                    dp[i+1] = dp[i-1];
            }else if(s[i] != '0')
                dp[i+1] = dp[i];
            else
                return 0;
        }else if(s[i] != '0')
            dp[i+1] = dp[i-1];
        else
            return 0;
    }
    return dp[len];
};
