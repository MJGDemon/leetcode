/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if(n == 0)
        return [];
    var backtrack = function(start,end){
        var ans = [];
        if(start > end){
            ans.push(null);
            return ans;
        }
        for(var i = start; i<=end; i++){
            var lefts = backtrack(start,i-1);
            var rights = backtrack(i+1,end);
            for(var j = 0; j<lefts.length; j++){
                for(var k = 0; k<rights.length; k++){
                    var root = new TreeNode(i);
                    root.left = lefts[j];
                    root.right = rights[k];
                    ans.push(root);
                }
            }
        }
        return ans;
    }
    return backtrack(1,n);
};