module(['app/help_option/action/module/view','app/help_option/action/module/model'],function(view,model)
{
	
	/**
	 * 事件
	 */
	addEventListener('MODEL_DEFAULT',defaultEvent);
	addEventListener('MODEL_NEXT',nextEvent);
	addEventListener('ITEM_CLICK',itemEvent);
	addEventListener('FEED_BUTTON_CLICK',feedButtonEvent)
	
	
	/**
	 * 获取默认分组成功
	 */
	function defaultEvent(e)
	{
		
		if(e.data.length>0)
		{
			view.createList(e.data);
		}
		else
		{
			location.replace(model.config()['route']['feed_option']);
		}
	}
	
	
	/**
	 * 获取下一组分组成功
	 */
	function nextEvent(e)
	{
		if(e.data.list.length>0)
		{
			view.createList(e.data.list)
		}
		else
		{
			location.href = model.config()['route']['help_content']+'?id='+e.data.id;
		}
	}
	
	
	/**
	 * 列表项被点击
	 */
	function itemEvent(e)
	{
		model.nextOption(e.data.id);
		model.setTitle(e.data.tag)
	}
	
	
	/**
	 * 反馈按钮被点击
	 */
	function feedButtonEvent(e)
	{
		location.href = model.config()['route']['feed_option'];
	}
	
})
