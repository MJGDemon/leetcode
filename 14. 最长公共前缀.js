/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var count = 0;
    var str = '';
    var ans = '';
    if(strs.length == 0)
        return '';
    else if(strs.length == 1)
        return strs[0];
    while(1){
        var flag = true;
        for(var i = 0; i<strs.length; i++){
            if(i == 0 && count < strs[i].length){
                str = strs[i][count];
            }
            if(strs[i][count] != str){
                flag = false;
                break;
            }
        }
        if(flag == true){
            ans += str;
            count++;
        }
        else if(flag == false)
            break;
    }
    return ans;
};