/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    var ans = [];
    var visit = function(root){
        if(root != null){
            visit(ans.left);
            ans.push(root.val);
            visit(ans.right);
        }
    }
    visit(root);
    return ans;
};