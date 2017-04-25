/**
 * 迭代器(遍历聚合对象)
 */

function Iterator()
{
	
	/**
	 * 聚合数据
	 */
	var names = ['张三','李四','王二']
	
	
	/**
	 * 指针
	 */
	var index = 0;
	
	
	/**
	 * 向前
	 */
	this.next = function()
	{
		return names[index++];
	}
	
	
	/**
	 * 向后
	 */
	this.prev = function()
	{
		index++;
		
		return names[names.length-index];
	}
}


/**
 * 测试
 */

var iterator = new Iterator();

window.addEventListener('click',function()
{
	
	console.log(iterator.next())
	console.log(iterator.prev())
	
})




