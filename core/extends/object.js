/**************************************************
 *
 * @author chenqingqi
 * 
 * Object对象扩展
 * 
***************************************************/


/**
 * 获取函数名称
 */
Object.prototype.name = function()
{
	var _name =  this.constructor.toString();
	_name 	  = _name.replace(/\s/g,"");
	_name 	  = _name.substring(8,_name.indexOf("("));
	return _name;
}


