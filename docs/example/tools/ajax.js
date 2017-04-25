/**
 * GET请求
 */
var http = new XMLHttpRequest();
http.open('get','http://abc.com/api?id=1',true);
http.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
http.addEventListener('readystatechange',onStateEvent)
http.send(null);


/**
 * POST请求
 */
var http = new XMLHttpRequest();
http.open('post','http://abc.com/api',true);
http.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
http.addEventListener('readystatechange',onStateEvent)
http.send('{"id":"1"}');


/**
 * 请求状态
 */
function onStateEvent(e)
{
	if (this.readyState == 4 && this.status == 200)
	{
		console.log(this.responseText);
		console.log('请求成功')
	}
	
	if(this.readyState == 4 && this.status == 404)
	{
		console.log('请求失败')
	}
}