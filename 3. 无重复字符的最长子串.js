/**
 * @param {string} s
 * @return {number}
 */
// 滑动窗口
var lengthOfLongestSubstring = function(s) {
    var len = s.length;
    var set = new Set();
    var ans = 0;
    var l = 0;
    var r = 0;
    while(l < len && r < len){
        // 判断窗口右侧元素是否重复
        if(!set.has(s[r])){
            // 不重复则加入set 并且窗口大小+1
            set.add(s[r++]);
            ans = Math.max(ans, r-l);
        }
        else{
            // 重复则整个窗口向右移动
            set.delete(s[l++]);
        }
    }
    return ans;
};