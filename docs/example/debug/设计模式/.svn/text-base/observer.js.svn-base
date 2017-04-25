/**
 * 观察者(订阅并接受推送)
 */




/**
 * 用户
 */
function User(name)
{
	
	/**
	 * 名称
	 */
	this.name = name;
	
	
	/**
	 * 更新
	 */
	this.updata = function(v)
	{
		console.log(this.name+':'+ v);
	}
}


/**
 * 微信
 */
function Weixin()
{
	
	var users = {};
	
	
	/**
	 * 增加订阅者
	 */
	this.attach = function(obj)
	{
		users[obj.name] = obj;
	}
	
	
	/**
	 * 删除订阅者
	 */
	this.detach = function(obj)
	{
		users[obj.name] = null;
	}
	
	
	/**
	 * 更新消息
	 */
	this.notify = function(obj)
	{
		for(var i in users)
		{
			users[i].updata(obj);
		}
	}
	
}


/**
 * 测试
 */
var weixin = new Weixin();

var user1  = new User('小明');

var user2  = new User('张三');

var user3  = new User('丽丽');


weixin.attach(user1);
weixin.attach(user2);
weixin.attach(user3);

weixin.notify('你有新消息')
