/**
 * 写入cookie
 */
function write(name,value)
{
	var Days = 30; 
    var exp  = new Date(); 
    exp.setTime(exp.getTime() + Days*24*60*60*1000); 
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString(); 
}


/**
 * 读取cookie
 */
function read(name)
{
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
 
    if(arr=document.cookie.match(reg))
    {
    	return unescape(arr[2]); 
    }
    else
    {
    	return 0;
    }
}



/**
 * 应用
 */
write('abc','123456')

console.log(read('abc'))  //输出：123456