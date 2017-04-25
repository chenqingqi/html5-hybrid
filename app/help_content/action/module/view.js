module(['core/extends/element','core/extends/event'],function()
{
	
	
	/**
	 * 创建内容
	 */
	function create(data)
	{
		if(data.content == '')
		{
			data.content = '没有帮助内容'
		}
		
		$('content').innerHTML = data.content;
		
		$('body').visible(true)
	}
	
	
	/**
	 * 反馈按钮被点击
	 */
	$('item').onclick = function(e)
	{
		dispatchEvent(new Event('FEED_BUTTON_CLICK',null,false));
	}
	
	
	return{
		
		create:create
	}
})
