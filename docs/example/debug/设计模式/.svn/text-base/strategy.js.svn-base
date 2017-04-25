/**
 * 策略模式(封装算法)
 */
function Strategy()
{
	var object;
	
	/**
	 * 设置策略
	 */
	this.setType = function(_object)
	{
		object = _object;
	}
	
	
	/**
	 * 行动
	 */
	this.action = function()
	{
		object.action()
	}
}



/**
 * 步行
 */
function Walk()
{
	this.action = function()
	{
		console.log('步行');
	}
}


/**
 * 开汽车
 */
function Car()
{
	this.action = function()
	{
		console.log('开汽车');
	}
}


/**
 * 做火车
 */
function Train()
{
	this.action = function()
	{
		console.log('做火车');
	}
}


/**
 * 测试
 */
var strategy = new Strategy();


//路太远，应该做火车
strategy.setType(new Train());
strategy.action()

//路太近，应该步行
strategy.setType(new Walk());
strategy.action()



