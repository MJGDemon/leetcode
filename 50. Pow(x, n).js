/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

var fun = function(x,n){
    if(n == 0)
        return 1;
    var tmp = fun(x,Math.floor(n/2));
    if(n%2 == 0)
        return tmp*tmp;
    else{
        return tmp*tmp*x;
    }
}

var myPow = function(x, n) {
    if(n<0){
        x = 1/x;
        n = -n;
    }
    return fun(x,n);
};