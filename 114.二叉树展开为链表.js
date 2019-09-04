/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
let last = null;
var flatten = function(root) {
    if(root == null)
        return;
    if(last != null){
        last.left = null;
        last.right = root;
    }
    last = root;
    let tmp = root.right;
    flatten(last.left);
    flatten(tmp);
};

