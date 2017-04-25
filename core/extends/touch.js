/**************************************************
 *
 * @author chenqingqi
 * 
 * touch触摸扩展
 * 
***************************************************/


window.touch = {};


/**
 * 滑动的矩形(起始值)
 */
touch.rect = {x:0,y:0,w:0,h:0};


/**
 * 滑动的方向:x:0左,1右, y:0上,1下,
 */
touch.direction = {x:0,y:0};


/**
 * 滑动距离
 */
touch.distance = {x:0,y:0};


/**
 * 滑动点击(按下和弹起在同一位置)
 */
touch.click = false;



/**
 * 按下
 */
window.addEventListener('touchstart',function(e){
	
	touch.rect.x = e.targetTouches[0].screenX;
	touch.rect.y = e.targetTouches[0].screenY;
	touch.rect.w = e.targetTouches[0].screenX;
	touch.rect.h = e.targetTouches[0].screenY;
	
},true);



/**
 * 移动
 */
window.addEventListener('touchmove',function(e){
	
	touch.rect.w     = e.targetTouches[0].screenX;
	touch.rect.h     = e.targetTouches[0].screenY;
	touch.distance.x = e.targetTouches[0].screenX-touch.rect.x;
	touch.distance.y = e.targetTouches[0].screenY-touch.rect.y;
	
	if(touch.rect.w>touch.rect.x)
	{
		touch.direction.x = 1;
	}
	else
	{
		touch.direction.x = 0;
	}
	
	if(touch.rect.h>touch.rect.y)
	{
		touch.direction.y = 1;
	}
	else
	{
		touch.direction.y = 0;
	}
	
},true);



/**
 * 弹起
 */
window.addEventListener('touchend',function(e){
	
	if(touch.rect.w == touch.rect.x && touch.rect.h == touch.rect.y)
	{
		touch.click = true;
	}
	else
	{
		touch.click = false;
	}
	
},true);