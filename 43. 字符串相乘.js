var multiply = function(num1, num2) {
    if(num1.charAt(0)==0||num2.charAt(0)==0){
      return "0";
    }
var a,b,c,l=0
	if(num1.length>=num2.length){
	a=num1.split("");
	b=num2.split("")
	}else{
	b=num1.split("");
	a=num2.split("")
	}
	c=[];
	for(k=0;k<a.length+b.length;k++){
		c[k]=0;
	}
	a=a.reverse();
	b=b.reverse();		
	for(i=0;i<a.length;i++){
		for(j=0;j<b.length;j++){
			c[j+i]+=a[i]*b[j];
		}
		
	}
	for(m=0;m<c.length;m++){
		if(c[m]>9){
			c[m+1]+=Math.floor(c[m]/10);
			c[m]%=10;
		}
	}
	c=c.reverse();
	for(n=0;n<1;n++){
		if(c[0]==0){c.splice(0,1);n--}
		return c.join("")
	}
}