/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    state = [
        {},
        {"blank": 1, "sign": 2, "digit": 3, ".": 4},
        {"digit": 3, ".": 4},
        {"digit": 3, ".": 5, "e": 6, "blank": 9},
        {"digit": 5},
        {"digit": 5, "e": 6, "blank": 9},
        {"sign": 7, "digit": 8},
        {"digit": 8},
        {"digit": 8, "blank": 9},
        {"blank": 9}
    ]

    cur_state = 1;
    for(var char of s){
        if(parseInt(char).toString()!='NaN'){
            char = 'digit';
        }
        else if(char == ' ')
            char = 'blank';
        else if(char == '+' || char == '-')
            char = 'sign'
        if(state[cur_state][char] == undefined)
            return false;
        cur_state = state[cur_state][char];
    }
    if(cur_state == 3 || cur_state == 5 || cur_state == 8 || cur_state == 9)
        return true;
    else
        return false;
};