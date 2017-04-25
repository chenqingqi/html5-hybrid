/**
 * 代理模式(一个类代表另一个类的功能)
 */

/**
 * 4S店
 */
function Shop(factory)
{
	/**
	 * 售卖
	 */
	this.sell = function()
	{
		factory.sell()
	}
}

/**
 * 工厂
 */
function Factory()
{
	/**
	 * 售卖
	 */
	this.sell = function()
	{
		console.log('宝马轿车')
	}
}


/**
 * 应用
 */
var shop = new Shop(new Factory());

shop.sell()   //输出：宝马轿车


