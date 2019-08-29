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

var reverseKGroup = function(head, k) {
    var flag = false;
    var ans = new ListNode(0);
    var hh = ans;
    if(k==1)
        return head;
    else{
        var nums = [];
        var h = head;
        while(1){
            var p = h;
            for(var i = 0; i<k-1; i++){
                if(p!=null){
                    nums.push(p);
                    p = p.next;
                }
            }
            if(p!=null){
                nums.push(p);
                p = p.next
                var len = nums.length
                for(var i = 0; i<len; i++){
                    hh.next = nums.pop();
                    hh = hh.next;
                }
                h = p;
            }else{
                hh.next = h;
                break;
            }
        }
        return ans.next;
    }
};