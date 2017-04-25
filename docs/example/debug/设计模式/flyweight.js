/**
 * 享元模式(重用对象)
 */


/**
 * 棋子
 */
function Chess(color)
{
	//颜色
	this.color = color;
	
	/**
	 * 初始
	 */
	function init()
	{
		console.log('创建'+color+'棋子')
	}
	
	//坐标
	this.point = function(x,y)
	{
		console.log(x+':'+y)
	}
}



/**
 * 对象池
 */
function Factory(){}

Factory.objects = {};

Factory.get = function(color)
{
	var obj = Factory.objects[color];
	
	if(obj == null)
	{
		obj = new Chess(color);
		Factory.objects[color] = obj;
	}
	
	return obj;
}


/**
 * 使用享元模式
 */

var c1 = Factory.get('红色')

var c2 = Factory.get('红色')

var c3 = Factory.get('黑色')

console.log(c1 == c2)  //输出：true          

console.log(Factory.objects) //输出：Object {红色: Chess, 黑色: Chess}
