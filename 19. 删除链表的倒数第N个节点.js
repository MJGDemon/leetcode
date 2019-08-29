/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var temp = n
    var p = head;
    while(temp--){
        p = p.next;
    }
    var tmp = head;
    if(p==null)
        return head.next;
    while(p.next!=null){
        tmp = tmp.next;
        p = p.next;
    }

    tmp.next = tmp.next.next;
    return head;
};