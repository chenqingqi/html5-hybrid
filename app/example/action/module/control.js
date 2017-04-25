/**
 * Control控制器(聚合View与Model,对外公开方法和事件)
 */
module(['app/example/action/module/model','app/example/action/module/view'],function(model,view)
{
	
	/**
	 * 启动面板
	 */
	function run()
	{
		view.title(model.title());
		view.content(model.content());
	}
	
	run();
})
