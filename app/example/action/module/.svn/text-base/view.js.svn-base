/**
 * View视图(封装DOM的独立模块,公开属性/方法/事件)
 */
module(['core/extends/element'],function()
{
	
	/**
	 * UI
	 */
	var ui = $('module');
	
	/**
	 * 标题
	 */
	function title(val)
	{
		ui.find('title').innerText = val;
	}
	
	
	/**
	 * 内容
	 */
	function content(val)
	{
		ui.find('content').innerText = val;
	}
	
	
	
	/**
	 * 公开接口
	 */
	return{
		
		title:title,
		content:content
	}
})
