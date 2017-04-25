/**************************************************
 *
 * @author chenqingqi
 * 
 * 本地永久存储
 * 
***************************************************/

window.storage = {};


/**
 * 写人数据
 * @param name:string 名字
 * @param data:object json数据
 */
storage.write = function(name,data)
{
	localStorage[name] = JSON.stringify(data);
}


/**
 * 读取数据
 * @param name:string 名字
 */
storage.read = function(name)
{
	if( localStorage[name] == undefined)
	{
		return null;
	}
	else
	{
		return JSON.parse(localStorage[name])
	}
}


/**
 * 删除数据
 * @param name:string 名字
 */
storage.remove = function(name)
{
	localStorage.removeItem(name);
}

