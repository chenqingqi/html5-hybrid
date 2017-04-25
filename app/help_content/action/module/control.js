module(['app/help_content/action/module/view','app/help_content/action/module/model'],function(view,model)
{
	
	/**
	 * 事件
	 */
	addEventListener('DATA_COMPLETE',dataCompleteEvent);
	addEventListener('FEED_BUTTON_CLICK',feedButtonEvent);
	
	
	/**
	 * 获取数据成功
	 */
	function dataCompleteEvent(e)
	{
		view.create(e.data);
	}
	
	
	/**
	 * 反馈按钮被点击
	 */
	function feedButtonEvent(e)
	{
		location.href = model.config()['route']['feed_option'];
	}
	
})
