/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    let depth = function(root){
        if(root == null)
            return 0;
        return Math.max(depth(root.left)+1,depth(root.right)+1)
    }
    if(root == null)
        return true;
    if(Math.abs(depth(root.left)-depth(root.right))>1)
        return false;
    return isBalanced(root.left) && isBalanced(root.right)
};

