/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let ans = [];
    if(root == null)
        return ans;
    let depth = 0;
    ans.push([root.val]);
    var bfs = function(root,depth){
        if(root == null)
            return;
        if(ans[depth] == undefined)
            ans[depth] = [];
        ans[depth].push(root.val);
        bfs(root.left,depth+1);
        bfs(root.right,depth+1);
    }    
    bfs(root.left, depth+1);
    bfs(root.right,depth+1);

    return ans;
};


