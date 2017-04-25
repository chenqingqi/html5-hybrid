/**
 * 闭包（封装一个函数对象）
 */
function Page()
{
	
	//计数
    var _count = 0;
    
    
    /**
     * 设置计数
     * @n:int
     */
    function count(n)
    {
    	_count = _count+n;
    	return _count;
    }

	
	/**
	 * 公开接口
	 */
    return{
    	
    	count:count
    }
}


/**
 * 闭包方式
 */
var pageA = Page()

console.log(pageA.count(1))   //输出：1

console.log(pageA.count(1))   //输出：2


/**
 * new方式
 */
var pageB = new Page()

console.log(pageB.count(1))   //输出：1

console.log(pageB.count(1))   //输出：2