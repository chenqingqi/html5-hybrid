/**
 * 职责链模式(申请费用流程)
 */
function Handler()
{
	
	/**
	 * 后续领导
	 */
	var _successor;
	
	
	/**
	 * 处理请求
	 */
	function handleRequest(name,fee)
	{
		
		if(fee<1000)
		{
			if(name == '张三')
			{
				console.log('可以批准')
			}
			else
			{
				console.log('一律拒绝')
			}
		}
		else
		{
			if(_successor)
			{
				console.log('交给领导处理')
				_successor.handleRequest()
			}
			else
			{
				console.log('一律拒绝')
			}
		}
	}
	
	/**
	 * 设置或获取后续对象
	 */
	function successor(v)
	{
		if(!v)
		{
			return _successor;
		}
		
		_successor = v;
	}
	
	return{
		
		handleRequest:handleRequest,
		successor:successor
	}
}



var handlerA = new Handler();

var handlerB = new Handler();

handlerA.successor(handlerB)

handlerA.handleRequest('张三',800)
