/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    var nums = [];
    if(lists.length == 0)
        return null;
    for(var i = 0; i<lists.length; i++){
        var p = lists[i];
        while(p!=null){
            nums.push(p);
            p = p.next;
        }
    }
    nums.sort((a,b) => b.val-a.val);
    var p = nums[0];
    if(p!=null)
        p.next = null;
    else
        return null;
    for(var i = 0; i<nums.length-1; i++){
        var n = nums[i+1];
        n.next = p;
        p = n;
    }
    return p;
};
