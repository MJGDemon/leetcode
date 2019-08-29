/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if(inorder.length == 0)
        return null;
    let root = new TreeNode(postorder[postorder.length-1]);
    let mid = inorder.indexOf(postorder[postorder.length-1]);
    root.right = buildTree(inorder.slice(mid+1,inorder.length),postorder.slice(mid,postorder.length-1));
    root.left = buildTree(inorder.slice(0,mid), postorder.slice(0,mid));
    return root;
};

