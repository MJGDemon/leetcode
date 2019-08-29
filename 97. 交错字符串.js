/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    if(s1.length+s2.length!=s3.length)
        return false;
    if(s3.length == 0)
        return true;
    if(s3.length == 1){
        if(s1.length == 1 && s2.length == 0)
            return s1[0] == s3[0];
        if(s1.length == 0 && s2.length == 1)
            return s2[0] == s3[0];
        return false;
    }

    if(s1.length>0){
        if(s1[0] == s3[0]){
            var ret = isInterleave(s1.slice(1,s1.length),s2,s3.slice(1,s3.length));
            if(ret == true)
                return true;
        }
    }
    if(s2.length>0){
        if(s2[0] == s3[0]){
            var ret = isInterleave(s1,s2.slice(1,s2.length),s3.slice(1,s3.length));
            if(ret == true)
                return true;
        }
    }
    return false;
};