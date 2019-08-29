/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(head == null || head.next == null)
        return head;
    var p = head;
    var n = p.next;
    p.next = n.next;
    n.next = p;
    var ans = n;
    n = p.next;
    while(n!=null&&n.next!=null){
        var t = n.next;
        n.next = t.next;
        t.next = n;
        p.next = t;
        p = n;
        n = n.next;
    }
    return ans;
};