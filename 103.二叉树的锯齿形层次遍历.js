/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
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
var zigzagLevelOrder = function(root) {
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
    ans.forEach((e,index) => {
        if(index%2!=0)
            e.reverse();
    })
    return ans;
};

