/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    let arr = [];
    let temp = head;
    while(temp != null){
        arr.push(temp.val);
        temp = temp.next;
    }
    let sortedArrToBST = function(nums){
        if(nums.length == 0)
            return null;
        let mid = Math.floor(nums.length/2);
        let root = new TreeNode(nums[mid]);
        root.left = sortedArrToBST(nums.slice(0,mid));
        root.right = sortedArrToBST(nums.slice(mid+1,nums.length));
        return root;
    }
    return sortedArrToBST(arr);

};

