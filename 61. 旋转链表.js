/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    var ans;
    if(head == null)
        return null;
    var p = head;
    var len = 1;
    while(p.next!=null){
        p = p.next;
        len++;
    }
    if(len == 1)
        return head;
    p.next = head;
    var tmp = len-k%len;
    while(tmp--){
        p = p.next;
        ans = p.next;
    }
    p.next = null;
    return ans;

};