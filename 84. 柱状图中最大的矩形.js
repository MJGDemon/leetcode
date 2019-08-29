/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    var fun = function(l,r){
        if(l>r)
            return 0;
        var min = l;
        for(var i = l; i<=r; i++)
            if(heights[min] > heights[i])
                min = i;
        return Math.max(heights[min] * (r-l+1), Math.max(fun(l,min-1),fun(min+1,r)))
    }
    return fun(0,heights.length-1);
};