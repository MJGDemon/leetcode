/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    path = path.split('/');
    var ans = '';
    var stack = [];
    for(var i = 0; i<path.length; i++){
        if(path[i] == '.')
            continue;
        else if(path[i] == '..'){
            if(stack.length!=0)
                stack.pop();
        }
        else if(path[i] != ''){
            stack.push(path[i]);
        }
        
    }
    ans = ans + '/' +stack.join('/');
    return ans;
};