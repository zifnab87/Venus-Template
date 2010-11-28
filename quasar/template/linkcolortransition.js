linksarray = document.getElementsByTagName("a");
/*redstart=61; 
greenstart=159; 
bluestart=208;*/
redend=105; 
greenend=151; 
blueend=20;
for (var i = 0; i < linksarray.length; i++) {
	if(linksarray[i].className!="username-coloured"){
			redstart=61; 
			greenstart=159; 
			bluestart=208
			redend=105; 
			greenend=151; 
			blueend=20;
			linksarray[i].style.color="#" + DecToHex(redstart) + DecToHex(greenstart) + DecToHex(bluestart);
		linksarray[i].onmouseover = function(){ colortransition(this)};	
		linksarray[i].onmouseout = function(){
			redstart=61; 
			greenstart=159; 
			bluestart=208;
			redend=105; 
			greenend=151; 
			blueend=20;
			this.style.color="#" + DecToHex(redstart) + DecToHex(greenstart) + DecToHex(bluestart);
			window.clearTimeout(timeout);
		}
	}
		/*linksarray[i].onmouseout = function() {
		redstart=255; greenstart=0; bluestart=0;
		redend=0; greenstart=0; blueend=255;
			this.style.color="#" + fmToHex(redstart) + fmToHex(greenstart) + fmToHex(bluestart);
		}*/
	}

	
function colortransition(obj){
				if ((redstart!=redend || bluestart!=blueend || greenstart!=greenend) && redstart>=0 && redstart<=255 && greenstart>=0 && greenstart<=255 && bluestart>=0 && blueend<=255){
					if(redstart<redend){
						redstart=redstart+1;
					}
					
					else if(redstart>redend){
						redstart=redstart-1;
					}
					else if(redstart>255 || redstart<0){
						redstart=redend;
					}
					if (greenstart!=greenend){
						if(greenstart<greenend){
							greenstart=greenstart+1;
						}
						else if(greenstart>greenend){ 
							greenstart=greenstart-1;
						}
						else if(greenstart>255 || greenstart<0){
							greenstart=greenend;
						}
					}
					if (bluestart!=blueend){
						if(bluestart<blueend){
							bluestart=bluestart+1;
						}
						else if(bluestart>blueend){
							bluestart=bluestart-1;
						}
						else if(bluestart>255 || bluestart<0){
							bluestart=blueend;
						}
					}
					obj.style.color="#" + DecToHex(redstart) + DecToHex(greenstart) + DecToHex(bluestart);
					timeout=setTimeout(function(){colortransition(obj)},1);
				
		}
		else {
		
			clearTimeout(timeout);
			return;
		}

}


function DecToHex(n){
	var hexChars = "0123456789ABCDEF";
	if (n == 0) return "00";
		var j, n;
		var temp = "";
		while (n != 0){
		j = n % 16;
		n = (n - j)/16;
		temp = hexChars.charAt(j) + temp;
	}
	if (temp.length < 2){
		temp = "0" + temp;
	}
	return temp;
}
function ColorToDec(colorstr){
	if (!colorstr)
		return;
	colorstr = colorstr.replace(/rgb\(|\)/g, "").split(",");
	redstart = parseInt(colorstr[0], 10);
	greenstart = parseInt(colorstr[1], 10);
	bluestart = parseInt(colorstr[2], 10);
}