/**
 * 类加载器(IE9以上版本)
 */
window.require = function(paths,complete)
{
	
	/**
	 * HEAD
	 */
	var head  = document.getElementsByTagName('head')[0];
	
	
	/**
	 * 计数器
	 */
	var count = 0;
	
	
	/**
	 * LOAD
	 */
	function load()
	{
		
		/**
		 * 屏蔽重加载
		 */
		var scripts = document.getElementsByTagName('script');
		
		for(var i in scripts)
		{
			if(scripts[i].src)
			{
				if(scripts[i].src.replace('http://'+location.host,"") == paths[count]+'.js')
				{
					console.log('JS文件重复加载：'+paths[count]+'.js');
				}
			}
		}
		
		
		/**
		 * 加载
		 */
		var script = document.createElement('script');
	    script.type = 'text/javascript';
	    script.src  = paths[count]+'.js';
	    
	    script.onload = function(e)
	    {
	    	count +=1;
	    	
	    	if(count !== paths.length)
	    	{
	    		load();
	    	}
	    	else
	    	{
	    		complete();
	    	}
	    }
	    
	    head.appendChild(script);
	}
	
	load();
}

