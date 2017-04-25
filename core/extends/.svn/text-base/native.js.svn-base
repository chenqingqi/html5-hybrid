/**
 * 宿主访问html5
 */
window.bridge = function(type,data)
{
	var event  = document.createEvent('HTMLEvents');
	event.initEvent(type,false,true);  
	event.data = data;
	
	//抛出事件
	dispatchEvent(event);
}