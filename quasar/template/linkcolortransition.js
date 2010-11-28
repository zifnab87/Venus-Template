linksarray = document.getElementsByTagName("a");

for (var i = 0; i < linksarray.length; i++) {
	if(linksarray[i].className!="username-coloured"){
			currentcolor=linksarray[i].style.color;
			/*colorstr=ColorToDec(currentcolor);
			redstart = parseInt(colorstr[0]);
			greenstart = parseInt(colorstr[1]);
			bluestart = parseInt(colorstr[2]);*/
			redstart=61; 
			greenstart=159; 
			bluestart=208;
			redend=105; 
			greenend=151; 
			blueend=20;
			linksarray[i].style.color="#" + DecToHex(redstart) + DecToHex(greenstart) + DecToHex(bluestart);
		linksarray[i].onmouseover = function(){ colortransition(this)};	
		linksarray[i].onmouseout = function(){
			currentcolor=this.style.color;
			/*colorstr=ColorToDec(currentcolor);
			redstart = parseInt(colorstr[0]);
			greenstart = parseInt(colorstr[1]);
			bluestart = parseInt(colorstr[2]);*/
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
				if ((redstart!=redend || bluestart!=blueend || greenstart!=greenend) && redstart>=0 && redstart<=255 && greenstart>=0 && greenstart<=255 && bluestart>=0 && bluestart<=255){
					if(Math.abs(redstart-redend)<10){
						redstart=redend;
					}
					
					else if(redstart<redend){
						redstart=redstart+10;
					}
					
					else if(redstart>redend){
						redstart=redstart-10;
					}
					if (greenstart!=greenend){
						if( Math.abs(greenstart-greenend)<10){
							greenstart=greenend;
						}
						else if(greenstart<greenend){
							greenstart=greenstart+10;
						}
						else if(greenstart>greenend){ 
							greenstart=greenstart-10;
						}
						
					}
					if (bluestart!=blueend){
						if(Math.abs(bluestart-blueend)<10){
							bluestart=blueend;
						}
						else if(bluestart<blueend){
							bluestart=bluestart+10;
						}
						else if(bluestart>blueend){
							bluestart=bluestart-10;
						}
						
					}
					obj.style.color="#" + DecToHex(redstart) + DecToHex(greenstart) + DecToHex(bluestart);
					timeout=setTimeout(function(){colortransition(obj)},50);
				
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
	return colorstr;
}