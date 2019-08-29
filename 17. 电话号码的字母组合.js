var letterCombinations = function(digits) {
    const arr = [
        [],
        [],
        ["a", "b", "c"],
        ["d", "e", "f"],
        ["g", "h", "i"],
        ["j", "k", "l"],
        ["m", "n", "o"],
        ["p", "q", "r", "s"],
        ["t", "u", "v"],
        ["w", "x", "y", "z"]
    ];
    let tmp = [];
    let result = [];
    let nums = digits.split("");
    for(let i = 0; i < nums.length; i++){
        result = []
        let now = arr[nums[i]];
        if(tmp.length != 0){
            for(let i = 0; i < tmp.length; i++){
                for(let j = 0; j < now.length; j++){
                    result.push(tmp[i] + now[j]);
                }
            }
        }else{
            result = arr[nums[i]];
        }
        tmp = result;
    }
    return result;
};