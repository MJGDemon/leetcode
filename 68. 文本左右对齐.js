/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    var ans = [];
    var tmp = ''
    wordCount = 0;
    for(var j = 0; j<words.length; j++){
        if(tmp == ''){
            if(words[j] == words[words.length-1]){
                tmp += words[j];
                for(var i = tmp.length; i<maxWidth; i++){
                    tmp += ' ';
                }
                ans.push(tmp);
                break;
            }else{
                tmp += words[j];
            }
        }
        else if(words[j].length+1+tmp.length<=maxWidth){
            if(j == words.length-1){
                tmp = tmp + ' ' + words[j];
                for(var i = tmp.length; i<maxWidth; i++){
                    tmp += ' ';
                }
                ans.push(tmp);
                break;
            }else{
                tmp = tmp + ' ' + words[j];
                wordCount++;
            }
        }else if(words[j].length+1+tmp.length>maxWidth){
            var spaceCount = maxWidth-tmp.length+wordCount;
            var everySpaceCount = Math.ceil(spaceCount/wordCount);
            // console.log(spaceCount)
            console.log(everySpaceCount)
            var str = tmp.split(' ');
            tmp = '';
            for(var i = 0; i<str.length; i++){
                if(i==str.length-1 && str.length!=1){
                    tmp += str[i];
                    break;
                }
                var space = '';
                for(var k = 0; k<everySpaceCount; k++){
                    space=space+' ';
                    spaceCount--;
                    if(spaceCount == 0)
                        break;
                }
                wordCount--;
                everySpaceCount = spaceCount/wordCount;
                tmp = tmp + str[i] + space;
            }
            ans.push(tmp);
            tmp = '';
            wordCount = 0;
            j--;
        }
    }
    return ans;
};
