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
var deleteDuplicates = function(head) {
    if(head == null)
        return head;
    var h = new ListNode(-100);
    h.next = head;
    var fast = h.next;
    var slow = h;
    while(fast!=null){
        while(fast.next != null && fast.val == fast.next.val)
            fast = fast.next;
        if(slow.next == fast)
            slow = slow.next;
        else{
            slow.next = fast;
            slow = slow.next;
        }
        fast = fast.next;
    }
    return h.next;
};