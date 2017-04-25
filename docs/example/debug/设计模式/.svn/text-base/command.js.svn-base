/**
 * 命令模式(将请求封装成对象)
 */
function Command()
{
	
	/**
	 * 宏命令集合
	 */
	var objects = [];
	
	
	/**
	 * 添加
	 */
	this.add = function(obj)
	{
		objects.push(obj)
	}
	
	/**
	 * 执行
	 */
	this.execute = function()
	{
		for(var i=0;i<objects.length;i++)
		{
			objects[i].execute()
		}
	}
}


/**
 * 立正
 */
function Lizheng()
{
	this.execute = function()
	{
		console.log('立正')
	}
}


/**
 * 稍息
 */
function Shaoxi()
{
	this.execute = function()
	{
		console.log('稍息')
	}
}

/**
 * 起步走
 */
function Zou()
{
	this.execute = function()
	{
		console.log('起步走')
	}
}



/**
 * 测试
 */
var command = new Command();

command.add(new Lizheng())

command.add(new Shaoxi())

command.add(new Zou())


command.execute()
