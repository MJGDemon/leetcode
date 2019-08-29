/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var ans = [];
    var tmp = [];
    for(var i = 0; i<strs.length; i++){
        var temp = strs[i].split('').sort().join('');
        if(tmp.indexOf(temp) != -1){
            ans[tmp.indexOf(temp)].push(strs[i]);
            console.log(ans)
        }
        else{
            tmp.push(temp);
            ans[tmp.indexOf(temp)] = [];
            ans[tmp.indexOf(temp)].push(strs[i]);
        }
    }
    return ans;
};
