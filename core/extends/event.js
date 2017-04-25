/**************************************************
 * 
 * @author chenqingqi
 * 
 * 事件模型
 * @param {Object} type    事件类型
 * @param {Object} data    携带数据
 * @param {Object} bubble  是否冒泡
 * 
 * 示例：
 * 
 * 发送事件
 * window/node.dispatchEvent(new Event(type,data,bubble))
 * 
 * 侦听事件
 * window/node.addEventListener(type,back)
 * 
 * 移除事件
 * window/node.removeEventListener(type,back)
 * 
 * 
***************************************************/

function Event(type,data,bubble)
{
	var event  = document.createEvent('HTMLEvents');
	event.initEvent(type,bubble,true);  
	event.data = data;
	return event;
}