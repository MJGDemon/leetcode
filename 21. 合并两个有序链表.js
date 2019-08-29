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
var mergeTwoLists = function(l1, l2) {
    if(l1==null)
        return l2;
    if(l2==null)
        return l1;
    var l3 = new ListNode();
    var p = l3;
    while(l1!=null && l2!= null){
        if(l1.val<l2.val){
            var tmp = new ListNode(l1.val);
            p.next = tmp;
            p = p.next;
            l1 = l1.next;
        }else{
            var tmp = new ListNode(l2.val);
            p.next = tmp;
            p = p.next;
            l2 = l2.next;
        }
    }

    if(l1!=null){
        p.next = l1;
    }else{
        p.next = l2;
    }

    return l3.next;
};