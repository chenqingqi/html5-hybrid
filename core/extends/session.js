/**************************************************
 *
 * @author chenqingqi
 * 
 * 存储临时数据,关闭浏览器就会删除
 * 
***************************************************/

window.session = {};


/**
 * 写人数据
 * @param name:string 名字
 * @param data:object json数据
 */
session.write = function(name,data)
{
	sessionStorage[name] = JSON.stringify(data);
}


/**
 * 读取数据
 * @param name:string 名字
 */
session.read = function(name)
{
	if(sessionStorage[name] == undefined)
	{
		return null;
	}
	else
	{
		return JSON.parse(sessionStorage[name])
	}
}


/**
 * 删除数据
 * @param name:string 名字
 */
session.remove = function(name)
{
	sessionStorage.removeItem(name);
}

