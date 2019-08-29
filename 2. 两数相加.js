/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var head = new ListNode(0)
    var p = head;
    var count = 0;
    while(l1!=null || l2!=null){
        var val1, val2;
        if(l1==null){
            val1 = 0;
        }else{
            val1 = l1.val;
        }
        if(l2==null){
            val2 = 0;
        }else{
            val2 = l2.val;
        }
        var a = (val1+val2+count)%10;
        if(val1+val2+count>a)
            count = 1;
        else
            count = 0;
        var temp = new ListNode(a);
        p.next = temp;
        p = p.next;
        if(l1!=null)
            l1 = l1.next;
        if(l2!=null)
            l2 = l2.next;
    }
    if(count != 0){
        var temp = new ListNode(count);
        p.next = temp;
    }
    return head.next;
};