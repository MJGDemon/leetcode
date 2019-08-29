/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if(root == null)
        return false;
    if(root.left == null && root.right == null){
        if(sum == root.val)
            return true;
        else
            return false;
    }
    return hasPathSum(root.left,sum-root.val) || hasPathSum(root.right, sum-root.val);
};

