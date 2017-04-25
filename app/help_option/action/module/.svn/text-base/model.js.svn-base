module(['core/extends/request','core/extends/event','core/extends/loader','core/extends/native','core/component/service'],function()
{
	
	
	
	/**
	 * 加载配置
	 */
	var config;
	
	loader('/config.json','json',complete);
	
	function complete(e)
	{
		config = e;
		
		getNativeData();
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
			
			defaultOption();
		}
		catch(e)
		{
			alert('获取app数据失败')
		}
	}
	
	
	
	/**
	 * 默认分组数据
	 */
	function defaultOption()
	{
		loading.show()
		
		request({
			
			mid	   :nativeData.mid,
			system :nativeData.system,
			type   :0,
			debug  :1,
			deviceId:'html5'
			
		},service(nativeData.host),config['api']['help_option'],'get',function(e){
			
			if(e.code == 1000)
			{
				dispatchEvent(new Event('MODEL_DEFAULT',e.data.list,false))
			}
			else
			{
				alert(e.msg);
			}
		})
	}
	
	
	
	/**
	 * 下一组分组数据
	 */
	function nextOption(id)
	{
		request({
			
			id     :id,
			mid	   :nativeData.mid,
			type   :0,
			debug  :1,
			deviceId:'html5'
			
		},service(nativeData.host),config['api']['next_option'],'get',function(e){
			
			if(e.code == 1000)
			{
				dispatchEvent(new Event('MODEL_NEXT',{list:e.data.list,id:id},false))
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
		
		config	     :getConfig,
		defaultOption:defaultOption,
		nextOption   :nextOption,
		setTitle     :setTitle
	}
	
})
