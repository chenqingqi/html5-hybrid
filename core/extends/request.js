/**
 * @author chenqingqi
 * 
 * 请求数据(http方式)
 * @param data :object   要发送的数据
 * @param url  :string   服务器地址
 * @param api  :string   接口名称
 * @param type :string   请求方式GET/POST
 * @param back :function 请求成功回调
 * 
 */
Window.prototype.request = function(data,url,api,type,back)
{
	
	/**
	 * 请求对象
	 */
	var http = new XMLHttpRequest();
	
	
	/**
	 * 请求失败次数,
	 */
	var count = 0;
	
	
	/**
	 * 开始请求
	 */
	function connect()
	{
		if(type == 'get' || type == 'GET')
		{
			get()
		}
		else if(type == 'post' || type == 'POST')
		{
			post()
		}
	}
	
	
	/**
	 * GET方式
	 */
	function get()
	{
		var value = '?';
		for(var i in data){value = value+i+'='+data[i]+'&'};
		value = value.substring(0,value.length-1);
		
		http.open(type,url+api+value,true);
		http.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
		http.send(null);
	}
	
	
	/**
	 * POST方式
	 */
	function post()
	{
		var value = '';
		for(var i in data){value = value+i+'='+data[i]+'&'};
		value = value.substring(0,value.length-1);
		
		http.open(type,url+api,true);
		http.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
		http.send(value);
	}
	
	
	/**
	 * 请求状态
	 */
	http.onreadystatechange = function(e)
	{
		if (this.readyState == 4 && this.status == 200)
		{
			back(JSON.parse(this.responseText));
			
			console.log(url+api)
			console.log(JSON.parse(this.responseText));
		}
		
		if(this.readyState == 4 && this.status == 404)
		{
			count +=1;
			
			if(count > 2)
			{
				alert('连续3次请求数据失败,请检查网络！')
			}
			else
			{
				console.log('开始第'+count+'次，请求'+api);
				http.abort();
				connect();
			}
		}
	}
	
	connect();
}


