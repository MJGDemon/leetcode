/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    var nums = [];
    for(var i = 0; i<n; i++)
        nums[i] = i+1;
    var set = new Set();
    var count = 0;
    var backtrack = function(){
        for(var i = 0; i<nums.length; i++){
            if(!set.has(nums[i])){
                set.add(nums[i]);
                if(set.size== nums.length){
                    if(count==k)
                        return;
                    count++;
                }else{
                    backtrack();
                }
                if(count==k)
                    return;
                else
                    set.delete(nums[i]);
            }
        }
    }

    backtrack()
    return Array.from(set).join('');
};