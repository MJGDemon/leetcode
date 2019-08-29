/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var count1 = m-1;
    var count2 = n-1;
    var end = nums1.length-1;
    while(count1 != -1 && count2 != -1){
        if(nums1[count1] > nums2[count2]){
            nums1[end] = nums1[count1];
            count1--;
            end--;
        }else{
            nums1[end] = nums2[count2];
            count2--;
            end--;
        }
    }
    if(count2 != -1){
        for(var i = count2; i>=0; i--){
            nums1[end] = nums2[i];
            end--;
        }
    }
    return nums1;
};