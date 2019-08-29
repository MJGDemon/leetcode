/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if(s == '' || p == '')
        return false;
    var len1 = s.length;
    var len2 = p.length;
    var dp = [];
    for(var i = 0; i<len1+1; i++){
        dp[i] = [];
    }
    dp[0][0] = 1;
    for(var i = 1; i<=len2; i++){
        dp[i][0] = p[i-1] == '*' ? dp[i-2][0] :0;
        for(var j = 1; j<=len1; j++){
            if(p[i-1] == '*'){
                if(s[j-1] != p[i-2] && p[i-2] != '.'){
                    dp[i][j] = dp[i-2][j];
                }
                else{
                    dp[i][j] = dp[i-2][j] || dp[i][j-1];
                }
            }
            else if(p[i-1] == '.' || p[i-1] == s[j-1]){
                dp[i][j] = dp[i-1][j-1];
            }
        }
    }
    return dp[len2][len1];
};