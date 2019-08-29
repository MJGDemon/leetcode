var findSubstring = function(s, words) {
    let len;
    if(words.length>0){
        len=words[0].length;
    }
  
    return   existsStr(s,words,len);
};
function initListMap(list){
	let map={};
	for(let i of list){
		if(!map[i]){
			map[i]={start:0};
		}
		map[i].start+=1;
	}
	return map;
}
function formateListMap(map){
	for(let i in map){
		map[i]["exist"]=map[i].start;
	}
}
function existsStr(str,list,len){
	let rst=[];
	if(len){
		let long=len*list.length;
		let listMap=initListMap(list);
		for(let i=0;i+long<=str.length;i++){
			let st=str.substr(i,long);
			formateListMap(listMap);
			let exist=true;
			for(let k=0;k<long;k+=len){
				let s=st.substr(k,len);
				if(listMap[s]&&listMap[s].exist>0){
					listMap[s].exist=listMap[s].exist-1;
				}else {
					exist=false;
					break;
				}
			}
			if(!exist){
				continue;
			}
			rst.push(i);
		}
	}
	return rst;
}