/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    let ans = [];
    let tmp = [];
    let backtrace = function(root, sum){
        if(root == null){
            return ;
        }
        tmp.push(root.val);
        if(root.left == null && root.right == null){
            if(sum == root.val)
                ans.push([...tmp]);
            tmp.pop();
            return;
        }
        
        backtrace(root.left, sum-root.val);
        backtrace(root.right, sum-root.val);
        tmp.pop();
    }
    backtrace(root, sum);
    return ans;
};

