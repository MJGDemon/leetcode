/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var map = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    }
    var ans = 0;
    for(var i = 0; i<s.length; i++){
        if(s[i] == 'C'){
            if(i!=s.length-1){
                if(s[i+1] == 'M'){
                    ans += 900;
                    i++;
                }
                else if(s[i+1] == 'D'){
                    ans += 400;
                    i++;
                }else
                    ans += map[s[i]];
            }else
                ans += map[s[i]];
        }else if(s[i] == 'X'){
            if(i!=s.length-1){
                if(s[i+1] == 'C'){
                    ans += 90;
                    i++;
                }
                else if(s[i+1] == 'L'){
                    ans += 40;
                    i++;
                }else
                    ans += map[s[i]];
            }else
                ans += map[s[i]];
        }else if(s[i] == 'I'){
            if(i!=s.length-1){
                if(s[i+1] == 'X'){
                    ans += 9;
                    i++;
                }
                else if(s[i+1] == 'V'){
                    ans += 4;
                    i++;
                }else
                    ans += map[s[i]];
            }else
                ans += map[s[i]];
        }else
            ans += map[s[i]];
    }
    return ans;
};