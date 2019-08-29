/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var len1 = nums1.length;
    var len2 = nums2.length;
    if(len1 == 0)
        return (nums2[Math.floor((len2+1)/2)-1]+nums2[Math.ceil((len2+1)/2)-1])/2;
    else if(len2 == 0)
        return (nums1[Math.floor((len1+1)/2)-1]+nums1[Math.ceil((len1+1)/2)-1])/2;
    var mid_p = Math.floor((1+len1+len2)/2);
    var mid_n = Math.ceil((1+len1+len2)/2);
    var ans = 0;
    if(mid_p == mid_n){
        var i = 0;
        var j = 0;
        var a = nums1[i];
        var b = nums2[j];
        while((i+j) != mid_p){
            if(a>b){
                ans = b
                if(j<len2-1)
                    b = nums2[++j];
                else{
                    b = a;
                    if(i<len1-1)
                        a = nums1[++i];
                    else
                        break;
                }
            }
            else{
                ans = a
                if(i<len1-1){
                    i++;
                    a = nums1[i];
                }
                else{
                    a = b;
                    if(j<len2-1)
                        b = nums2[++j];
                    else
                        break;
                }
            }
        }

    }else{
        var i = 0;
        var j = 0;
        var a = nums1[i];
        var b = nums2[j];
        var ans1 = 0;
        var ans2 = 0;
        while((i+j) != mid_p){
            if(a>b){
                ans1 = b
                if(j<len2-1)
                    b = nums2[++j];
                else{
                    b = a;
                    if(i<len1-1)
                        a = nums1[++i];
                    else
                        break;
                }
            }
            else{
                ans1 = a
                if(i<len1-1)
                    a = nums1[++i];
                else{
                    a = b;
                    if(j<len2-1)
                        b = nums2[++j];
                    else
                        break;
                }
            }
        }
        if(a>b){
            ans2 = b
        }
        else{
            ans2 = a
        }
        ans = (ans1+ans2)/2;
    }

    return ans;
};
