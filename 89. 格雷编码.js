/**
 * @param {number} n
 * @return {number[]}
 */
// var grayCode = function(n) {
//     var backtrack = function(n){
//         if(n == 0)
//             return ['0'];
//         else if(n == 1){
//             return ['0','1'];
//         }else{
//             var tmp = backtrack(n-1);
//             tmp = tmp.concat(Array.from(tmp).reverse())
//             for(var i = 0; i<tmp.length/2; i++){
//                 tmp[i] = '0' + tmp[i];
//             }
//             for(var i = tmp.length/2; i<tmp.length; i++){
//                 tmp[i] = '1' + tmp[i];
//             }
//             return tmp;
//         }
//     }
//     var ans = backtrack(n)
//     ans.forEach((e,index,array) => {
//         array[index] = parseInt(e,2);
//     });
//     console.log(ans)
//     return ans;
// };

var grayCode = function(n){
    var ans  = [];
    for(var i = 0; i<1<<n; i++)
        ans.push(i^i>>1)
    return ans;
}