module(['app/feed_content/action/module/view','app/feed_content/action/module/model'],function(view,model)
{
	
	/**
	 * 事件
	 */
	addEventListener('NATIVEDATA_COMPLETE',nativeCompleteEvent);
	addEventListener('SUBMIT',submitEvent);
	
	/**
	 * 更改主题色
	 */
	function nativeCompleteEvent(e)
	{
		view.setButtonColor('#'+e.data.themeColor)
	}
	
	/**
	 * 提交数据
	 */
	function submitEvent(e)
	{
		model.sumbitData(e.data)
	}
	
})
