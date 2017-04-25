/**************************************************
 *
 * @author chenqingqi
 * 
 * 数组对象扩展
 * 
***************************************************/


/**
 * 删除数组中的指定元素,返回新数组
 * @param {Object} object 数组中的元素
 */
Array.prototype.remove = function(object)
{
	for(var i=0;i<this.length;i++)
	{
		if(this[i]==object) this.splice(i,1)
	}
	return this;
}


/**
 * 获取元素在数组中的位置
 * @param {Object} object 数组中的元素
 */
Array.prototype.index = function(object)
{
	for(k in this)
    {
        if(this[k] == object) return k;
    }
}

/**
 * 清空数组中的元素
 */
Array.prototype.clear = function()
{
	this.splice(0,this.length);
	return this;
}

/**
 * 获取数组中最小的值
 */
Array.prototype.min = function()
{
	return Math.min.apply(null,this);
}

/**
 * 获取数组中最大的值
 */
Array.prototype.max = function()
{
	return Math.max.apply(null,this);
}


