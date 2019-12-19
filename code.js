function progDrag(el,xy) {
 
    var evObjStart  = document.createEvent('MouseEvents');
    var evObj = document.createEvent("MouseEvents");
    var evObjEnd = document.createEvent("MouseEvents");

    evObjStart.initMouseEvent("mousedown", true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
    evObj.initMouseEvent("mousemove", true, true, window, 1, xy[0], xy[1], xy[0], xy[1], false, false, false, false, 0, null);
    evObjEnd.initMouseEvent("mouseup", true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);

    el.dispatchEvent(evObjStart);
    el.dispatchEvent(evObj);              
    el.dispatchEvent(evObjEnd);
}
function pos(el)
{
	var tl= [el.getBoundingClientRect().left  ,el.getBoundingClientRect().top  ];
	var br=[tl[0]+el.offsetWidth,tl[1]+el.offsetHeight];
	return [tl,br];
}
var cropper=document.getElementsByClassName('GBFM-LPCA')[0];
var handle=cropper.getElementsByClassName('GBFM-LPCB');
var coords=pos(cropper);
progDrag(handle[0],coords[0]);
progDrag(handle[3],coords[1]);