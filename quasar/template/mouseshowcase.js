//Author:Michael Michaelidis
//Year: 2010
//Username: Zifnab

var mousex = 0

var IE = document.all?true:false
if (!IE) 
	document.captureEvents(Event.MOUSEMOVE)
document.onmousemove = getmousepos;


function getmousepos(e) {
  if (IE) {
    mousex = event.clientX + document.body.scrollLeft
  } else { 
    mousex = e.pageX
  }  
  if (mousex < 0){mousex = 0}
  var layer1 = document.getElementById("custom-header3");
  var layer2 = document.getElementById("custom-header4");
  var screenwidth=1280;
  layer1.style.backgroundPosition=mousex/screenwidth*210+"% 60%";
  layer2.style.backgroundPosition=100-mousex/screenwidth*90+"% 60%";
  return true
}
