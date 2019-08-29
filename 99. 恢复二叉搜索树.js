/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    var val = [];
    var node = [];
    var dfs = function(root){
        if(root == null)
            return ;
        dfs(root.left);
        val.push(root.val);
        node.push(root);
        dfs(root.right);
    }
    dfs(root);
    val.sort((a,b) => a-b);
    for(var i = 0; i<val.length; i++){
        node[i].val = val[i];
    }
};