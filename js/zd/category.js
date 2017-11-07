var imgbox=document.querySelectorAll('.imgbox');
var font=document.querySelectorAll('.font');
var sjx=document.querySelectorAll('.sjx');
var mask=document.querySelectorAll('.mask');
var zfx=document.querySelectorAll('.zfxs');
var lines=document.querySelectorAll('.liness');
var zfxs=document.querySelectorAll('.zfx');

	
Array.from(imgbox).forEach(function(val,index){
		val.onmousemove=function(){
		zfx[index].style.display="block";
		font[index].style.cssText='background:rgb(252,24,115);position:absolute;left:-50px;top:0;width:210px';	
		mask[index].style.cssText='border-bottom: 40px solid rgb(252,24,115);';
		lines[index].style.cssText='left:65px;';
		zfxs[index].style.cssText='left:125px';
		sjx[index].style.display="none";
	
					
		}
		val.onmouseleave=function(){
		sjx[index].style.display="block";
		zfx[index].style.display="none";
		font[index].style.cssText='background:rgb(153,153,153);width:160px';	
		mask[index].style.cssText='border-bottom: 40px solid rgb(153,153,153);';
		lines[index].style.cssText='left:40px;';
		zfxs[index].style.cssText='left:100px';	
		}
		}
		)