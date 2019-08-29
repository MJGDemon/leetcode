/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var l = 0;
    var r = height.length-1;
    var area = (r-l)*Math.min(height[l],height[r]);
    while(l<r){
        if(height[l]<height[r])
            l++;
        else
            r--;
        area = Math.max(area,(r-l)*Math.min(height[l],height[r]));
    }
    return area;
};