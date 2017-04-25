/**************************************************
 *
 * @author chenqingqi
 * 
 * String对象扩展
 * 
***************************************************/


/**
 * 是否是手机号码
 */
String.prototype.isMobile = function()
{
	var reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
	return reg.test(this);
}


/**
 * 是否是邮箱
 */
String.prototype.isMail = function()
{
	var reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
	return reg.test(this);
}


/**
 * 去除开头空格
 */
String.prototype.trim = function()
{
	return this.replace(/(^\s*)|(\s*$)/g, "");
}
