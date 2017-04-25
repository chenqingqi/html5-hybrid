/**************************************************
 *
 * @author chenqingqi
 * 
 * 系统
 * 获取操作系统/
 * 
 *
***************************************************/

window.system = {};


/**
 * 获取手机系统类型
 */
system.mobile = function()
{
	var sUserAgent = navigator.userAgent;
	
    if (sUserAgent.indexOf('Android') > -1 || sUserAgent.indexOf('Linux') > -1)
    {
    	return "Android";
    }
    
	if (sUserAgent.indexOf('iPhone') > -1)
	{
		return "iPhone";
	}
	
	if (sUserAgent.indexOf('iPad') > -1)
	{
		return "iPad";
	}
	
	if (sUserAgent.indexOf('Windows Phone') > -1)
	{
		return "Windows Phone";
	}
}



/**
 * 获取地址栏get参数
 */
system.get = function(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}



/**
 * 页面跳转
 * @param url  地址
 * @param data get数据
 */
system.route = function(url,data)
{
	var value = '?';
	
	for(var i in data)
	{
		value = value+i+'='+data[i]+'&';
	}
	
	value = value.substring(0,value.length-1);
	
	location.href = url + value;
}
