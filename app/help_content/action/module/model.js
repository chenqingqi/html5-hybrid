module(['core/extends/request','core/extends/event','core/extends/loader','core/extends/system','core/component/service'],function()
{
	
	/**
	 * 加载配置
	 */
	var config;
	
	loader('/config.json','json',complete);
	
	function complete(e)
	{
		config = e;
		
		getNativeData()
	}
	
	
	/**
	 * 获取APP数据
	 */
	var nativeData;
	
	function getNativeData()
	{
		try
		{
			nativeData = JSON.parse(native.bridge('getBaseData',null));
			
			getContentData()
		}
		catch(e)
		{
			alert('获取app数据失败')
		}
	}
	
	
	/**
	 * 帮助内容
	 */
	function getContentData()
	{
		loading.show();
		
		request({
			
			id	   :system.get('id'),
			debug  :1,
			deviceId:'html5'
			
		},service(nativeData.host),config['api']['help_content'],'get',function(e){
			
			if(e.code == 1000)
			{
				loading.hide();
				
				setTitle(e.data.title)
				
				dispatchEvent(new Event('DATA_COMPLETE',e.data,false))
			}
			else
			{
				alert(e.msg);
			}
		})
	}
	
	
	
	/**
	 * 获取配置数据
	 */
	function getConfig()
	{
		return config;
	}
	
	
	/**
	 * 发送标题数据
	 */
	function setTitle(data)
	{
		native.bridge('setTitle',data)
	}
	
	
	
	return{
		
		config:getConfig
	}
	
})
