/**
 * 反射（避免代码写死）
 * 
 * 框架与框架要解决的核心问题
 * 我们做房子卖给用户住，用于用户自己安装门窗和空调，我做的房子就是框架，用户需要使用我的框架，把门窗插入进我提供的框架中。框架与工具类有区别，工具类被用户的类调用，而框架则是调用用户提供的类。
 * 框架要解决的核心问题
 * 我在写框架(房子)时，你这个用户可能还在上小学，还不会写程序呢？我写的框架程序怎样能调用到你以后写的类呢？
 * Class.forName(classNameStr).getMethod(methodName).invoke(obj,Class)
 * 因为在写程序时无法知道要被调用的类名，所以，在程序中无法直接new某个类的实例对象了，而要用反射方式来做
 */



/**
 * 获取window的属性和方法
 */
for(var i in window)
{
	console.log(i+':'+window[i])
}


////////////////////////////////////////////////////////////


/**
 * 根据键盘值，执行相应方法
 */
window.addEventListener('keydown',function(e)
{
	keyEvent[e.keyCode]()
})


/**
 * 键盘事件
 */
var keyEvent = {
	
	65:function()
	{
		alert('A')
	},
	
	83:function()
	{
		alert('S')
	},
	
	68:function()
	{
		alert('D')
	}
}



////////////////////////////////////////////////////////////



/**
 * 根据数据，更新元素样式
 */
function style(data)
{
    for(var i in data)
	{
		document.body.style[i] = data[i];
	}
}

style({'background-color':'red'});



////////////////////////////////////////////////////////////



/**
 * switch耦合
 */
switch(num)
{
	case 0 :
		console.log('跑步')
		break;
	
	case 1 :
		console.log('跳跃')
		break;
	
	case 2 :
		console.log('睡觉')
		break;
}



/**
 * 反射解耦
 */
function people()
{
	function run()
	{
		console.log('跑步')
	}
	
	function jump()
	{
		console.log('跳跃')
	}
	
	function sleep()
	{
		console.log('睡觉')
	}
	
	return{
		
		0:run,
		1:jump,
		2:sleep
	}
}


new people()[0]
