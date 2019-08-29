
var partition = function(head, x) {
    var h1 = new ListNode(0);
    var h2 = new ListNode(0);
    var p = head;
    var p1 = h1;
    var p2 = h2;
    while(p!=null){
        if(p.val<x){
            p1.next = p;
            p1 = p1.next;
            p = p.next;
        }
        else{
            p2.next = p;
            p2 = p2.next;
            p = p.next;
        }
    }
    p2.next = null;
    p1.next = h2.next;
    return h1.next;
};