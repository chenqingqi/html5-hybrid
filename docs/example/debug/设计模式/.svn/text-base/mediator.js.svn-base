/**
 * 中介者模式(处理多个对象之间的交互)
 */


/**
 * 消息中介(聊天室)
 */
function Mediator()
{
	
	/**
	 * 存储
	 */
	var storage = {};
	
	
	/**
	 * 注册
	 */
	this.register = function(object)
	{
		storage[object.name] = object;
		object.mediator 	 = this;
	}
	
	
	/**
	 * 发送
	 */
	this.send = function(data,form,to)
	{
		if(to)
		{
			to.receive(data,form)
		}
		else
		{
			for(var i in storage)
			{
				if(storage[i] !== form)
				{
					storage[i].receive(data,form)
				}
			}
		}
	}
}



/**
   * 人
   */
function Person(name)
{
	
	/**
	 * 名字
	 */
	this.name = name;
	
	
	/**
	 * 中介者
	 */
	this.mediator;
	
	
	/**
	 * 发送
	 */
	this.send = function(data,to)
	{
		
		this.mediator.send(data,this,to)
	}
	
	/**
	 * 接收
	 */
	this.receive = function(data,form)
	{
		console.log(this.name+'收到消息-----------'+form.name+'说：'+data)
	}
}



var xiaoming = new Person('小明');
var zhangsan = new Person('张三');
var lisi     = new Person('李四');

var mediator = new Mediator();
mediator.register(xiaoming);
mediator.register(zhangsan);
mediator.register(lisi);


xiaoming.send('大家好')         //广播消息
xiaoming.send('咱俩私聊',lisi)  //私聊消息





///**
// * 方法中介(MVC)
// */
//function Mediator(view,model)
//{
//	/**
//	 * 初始化
//	 */
//	function init()
//	{
//		view.setTitle(model.title);
//	}
//	
//	init();
//}
//
//
///**
// * 视图
// */
//function View()
//{
//	/**
//	 * 修改标题
//	 */
//	this.setTitle = function(data)
//	{
//		console.log(data)
//	}
//}
//
//
///**
// * 数据
// */
//function Model()
//{
//	
//	/**
//	 * 标题数据
//	 */
//	this.title = '暂无标题';
//	
//}



var mediator = new Mediator(new View(),new Model());
