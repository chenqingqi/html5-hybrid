/**************************************************
 *
 * @author chenqingqi
 * 
 * 屏幕(浏览器可见区域)
 * 获取屏幕的宽高,角度,设置/退出全屏功能
 * 
 *
***************************************************/

window.screen = {};


/**
 * 屏幕可见区域宽度
 */
screen.width = function()
{
	return document.documentElement.clientWidth;
}


/**
 * 屏幕可见区域高度
 */
screen.height= function()
{
	return document.documentElement.clientHeight;
}


/**
 * 全屏
 */
screen.full = function()
{
	var de = document.documentElement;
	
    if(de.requestFullscreen) 
    {
        de.requestFullscreen();
    } 
    else if(de.mozRequestFullScreen) 
    {
        de.mozRequestFullScreen();
    } 
    else if(de.webkitRequestFullScreen) 
    {
        de.webkitRequestFullScreen();
    }
}


/**
 * 退出全屏
 */
screen.exit = function()
{
	var de = document;

    if (de.exitFullscreen) 
    {
        de.exitFullscreen();
    } 
    else if (de.mozCancelFullScreen) 
    {
        de.mozCancelFullScreen();
    } 
    else if (de.webkitCancelFullScreen) 
    {
        de.webkitCancelFullScreen();
    }
}



/**
 * 横竖屏事件 
 * 侦听 orientationchange  属性window.orientation  0或180竖屏  90或-90横屏
 */