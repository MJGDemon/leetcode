/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    var tmp = [];
    var visit = function(root){
        if(root != null){
            visit(root.left);
            tmp.push(root.val);
            visit(root.right);
        }
    }
    visit(root)
    for(var i = 0; i<tmp.length-1; i++)
        if(tmp[i]>=tmp[i+1])
            return false;
    return true;
};