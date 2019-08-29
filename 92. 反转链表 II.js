/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    if(m == n)
        return head;
    var h = new ListNode(0);
    h.next = head;
    var start = head;
    var p = h;
    var hh = h;
    for(var i = 0; i<m-1; i++)
        p = p.next;
    hh = p;
    start = p.next;
    for(var i = m; i<n; i++){
        var nxt = start.next;
        start.next = p;
        p = start;
        start = nxt;
    }
    hh.next.next = start;
    hh.next = p;
    return h.next;
};