/**************************************************
 *
 * @author chenqingqi
 * 
 * 设备(手机硬件调用)：支持陀螺仪/地理位置
 * 
***************************************************/

window.device = {};


/**
 * 
 * 陀螺仪(设备旋转方向)
 */
window.addEventListener('deviceorientation',function(e)
{
	console.log(e.alpha)  //z轴0~360
 	console.log(e.beta )  //x轴(由前向后) -180~180
 	console.log(e.gamma)  //y轴(由左向右) -90~90
})


/**
 * 地理定位
 */
device.location = function() 
{ 
    if (navigator.geolocation) 
    { 
        navigator.geolocation.getCurrentPosition(function(e)
        {
        	console.log("纬度: " + e.coords.latitude)
        	console.log("经度: " + e.coords.longitude)
        })
    } 
    else 
    { 
        console.log("该浏览器不支持获取地理位置");
    } 
} 