module(['core/extends/request','core/extends/loader','core/component/service','core/extends/system','core/extends/event'],function()
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
			loading.show()
			nativeData = JSON.parse(native.bridge('getBaseData',null));
		}
		catch(e)
		{
			alert('获取app数据失败')
		}
		
		window.setTimeout(function()
		{
			dispatchEvent(new Event('NATIVEDATA_COMPLETE',nativeData,false));
			loading.hide()
			
		},500)
	}
	
	/**
	 * 提交数据
	 */
	function sumbitData(data)
	{
		loading.show();
		
		request({
			
			mid    :nativeData.mid,
			system :nativeData.system,
			id	   :system.get('id'),
			data   :data,
			debug  :1,
			deviceId:'html5'
			
		},service(nativeData.host),config['api']['feed_content'],'post',function(e){
			
			if(e.code == 1000)
			{
				loading.hide();
				
				alert('提交成功');
				
				backToMyCenter();
			}
			else
			{
				alert(e.msg);
			}
		})
	}
	
	
	/**
	 * 跳转到我的页面
	 */
	function backToMyCenter()
	{
		try
		{
			native.bridge('backToMyCenter',null);
		}
		catch(e)
		{
			alert('跳转至我的页面失败')
		}
	}
	
	
	return{
		
		sumbitData:sumbitData
	}
})
