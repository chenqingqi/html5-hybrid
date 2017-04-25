module(['app/feed_option/action/module/view','app/feed_option/action/module/model'],function(view,model)
{
	
	/**
	 * 事件
	 */
	addEventListener('MODEL_DEFAULT',defaultEvent);
	addEventListener('MODEL_NEXT',nextEvent);
	addEventListener('ITEM_CLICK',itemEvent);
	
	
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
			location.replace(model.config()['route']['feed_content']);
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
			location.href = model.config()['route']['feed_content']+'?id='+e.data.id
		}
	}
	
	
	/**
	 * 列表项被点击
	 */
	function itemEvent(e)
	{
		model.nextOption(e.data.id);
		
		model.setTitle(e.data.tag);
	}
	
})
