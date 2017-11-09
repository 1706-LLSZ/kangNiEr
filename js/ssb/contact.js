window.onload=function(){


	
	var input=document.getElementsByClassName("put");
	for(var i=0;i<input.length;i++){
		input[i].onfocus=function(){
			this.style.border="2px solid #FF3795"
		}
		input[i].onblur=function(){
			this.style.border="2px solid #FFC9E3"
		}
	}


}






