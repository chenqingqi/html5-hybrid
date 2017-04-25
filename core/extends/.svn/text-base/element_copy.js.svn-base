/**************************************************
 *
 * @author chenqingqi
 * 
 * DOM扩展
 * 通过扩展HTML功能,增加更易使用的节点操作方法
 * 
 *
***************************************************/


/**
 * 选择/创建节点
 * @param object:Ojbect
 * 
 * 示例：
 * 转换字符串并返回节点    $('<slide></slide>') 
 * 直接调用节点                  $(node) 
 * 根据名称获取节点           $('button') 
 * 
 */
window.$ = function(object)
{
	if( typeof object == "string")
	{
		if(object.indexOf('<') == -1)
		{
			return document.getElementsByTagName(object)[0];
		}
		else
		{
			var node = document.createElement('div');
			node.innerHTML = object;
			return node.children[0];
		}
	}
	else if( typeof object == "object")
	{
		return object;
	}
}



/**
 * 设置/获取样式
 * @param value:Object
 * 
 * 示例: 
 * node.css('width') 获取样式值
 * node.css({width:'100px',height:'80px'}) 设置样式值
 */
Element.prototype.css = function(value)
{
	if((typeof value) == 'string')
	{
		return window.getComputedStyle(this,null)[value];
	}
	else if((typeof value) == 'object')
	{
		for(var i in value)
		{
			this.style[i] = value[i]
		}
	}
}



/**
 * 获取或设置节点属性
 */
Element.prototype.attr = function(value)
{
	if((typeof value) == 'string')
	{
		return this.getAttribute(value)
	}
	else if((typeof value) == 'object')
	{
		for(i in value)
		{
			this.setAttribute(i,value[i]);
		}
	}
}



/**
 * 设置节点是否可见
 * @param {Object} value:Boolean
 */
Element.prototype.visible = function(value)
{
	if(value)
	{
		this.removeAttribute('hidden');
	}
	else
	{
		this.setAttribute('hidden','hidden');
	}
}



/**
 * 设置或获取节点深度
 * @param value:int
 */
Element.prototype.index = function(value)
{
	if(!value && value !==0)
	{
		for(var i=0;i<this.parentNode.children.length;i++)
		{
			if(this.parentNode.children[i] == this)
			{
				return i;
			}
		}
	}
	else
	{
		var newnode  = this.cloneNode();
		var parent   = this.parentNode;
		parent.removeChild(this);
		
		var lastnode = parent.children[value];
		
		if(lastnode == undefined)
		{
			parent.appendChild(newnode)
		}
		else
		{
			parent.insertBefore(newnode,lastnode);
		}
	}
}



/**
 * 节点动画
 * @param  properties :Object   属性
 * @param  duration	  :int      时间
 * @param  easing     :string   类型 {linear:'匀速',ease:'慢-快-慢',ease-in:'慢-快',ease-out:'快-慢'}
 * @param  complete   :function 回调
 */
Element.prototype.animate = function(properties,duration,easing,complete)
{
	if(!duration) duration = '1s';
	
	if(!easing  ) easing   = 'ease';
	
	for(var i in properties)
	{
		this.style[i] = properties[i]
	};
	
	this.style.transition = 'all '+duration+'s '+easing;
	
	if(complete) setTimeout(complete,duration*1000);
}



/**
 * 获取父节点
 * Element.prototype.parentNode
 */



/**
 * 节点类型
 * Element.prototype.nodeType
 */



/**
 * 节点名称
 * Element.prototype.nodeName
 */



/**
 * 获取子对象集合
 * Element.prototype.children
 */



/**
 * 查找子节点
 * @param name:String 
 */
Element.prototype.find = function(name)
{
	return this.getElementsByTagName(name)[0]
}



/**
 * 添加节点
 * @param object:Object
 */
Element.prototype.addNode = function(object)
{
	this.appendChild(object);
	
	//事件:对象已增加
	var added  = document.createEvent('HTMLEvents');
	added.initEvent('added',false,true);
	this.dispatchEvent(added);
	
	//事件:显示列表已刷新
	var render  = document.createEvent('HTMLEvents');
	render.initEvent('render',true,true);
	this.dispatchEvent(render);
}



/**
 * 移除节点
 * @param object:Object
 */
Element.prototype.removeNode = function(object)
{
	this.removeChild(object);
	
	//事件:对象已移除
	var removed  = document.createEvent('HTMLEvents');
	removed.initEvent('removed',false,true);
	this.dispatchEvent(removed);
	
	//事件:显示列表已刷新
	var render  = document.createEvent('HTMLEvents');
	render.initEvent('render',true,true);
	this.dispatchEvent(render);
}