/**
 * 模板方法(做事情的步骤抽出来)
 */
function Do()
{
	
	/**
	 * 开始
	 */
	this.start = function()
	{
		this.boilWater()
		this.brew()
	}
	
	
	/**
	 * 烧水
	 */
	this.boilWater = function()
	{
		console.log('烧水')
	}
	
	
	/**
	 * 冲泡
	 */
	this.brew = function()
	{
		console.log('此方法须重写')
	}
}


/**
 * 泡茶
 */
function BrewTea()
{
	Do.call(this)
	
	this.brew = function()
	{
		console.log('泡茶')
	}
}


/**
 * 泡咖啡
 */
function BrewCoffee()
{
	Do.call(this)
	
	this.brew = function()
	{
		console.log('泡咖啡')
	}
}



/**
 * 运用
 */

new BrewCoffee().start()



