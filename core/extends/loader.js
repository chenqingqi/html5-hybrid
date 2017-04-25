/**************************************************
 *
 * @author chenqingqi
 * 
 * 加载图片/json/js文件
 * 
***************************************************/

/**
 * 
 * @param url:string        路径
 * @param type:string       类型  img json text
 * @param complete:function 加载完成
 */
window.loader = function(url,type,complete)
{
	
	if(type == 'img')
	{
		loadIMG(url,complete)
	}
	
	if(type == 'json')
	{
		loadJSON(url,complete)
	}
	
	if(type == 'text')
	{
		loadTEXT(url,complete)
	}
	
	
	/**
	 * 加载图片
	 */
	function loadIMG(url,back)
	{
		var element = document.createElement('img');
		element.src = url;
		element.onload = function(e)
		{
			back(getBase64Image(element) )
		}
		
		function getBase64Image(img) 
		{
            var canvas 	 	= document.createElement("canvas");
            canvas.width 	= img.width;
            canvas.height 	= img.height;
            var ctx 		= canvas.getContext("2d");
            ctx.drawImage(img,0,0,img.width,img.height);
            var dataURL 	= canvas.toDataURL("image/png");
            return dataURL
        }
	}
	
	
	/**
	 * 加载JSON
	 */
	function loadJSON(url,back)
	{
		var http = new XMLHttpRequest();
		http.open("GET",url,true); 
		http.send();
		
		http.onreadystatechange = function(e)
		{
			if(this.readyState == 4 && this.status == 200)
			{
				back(JSON.parse(http.responseText))
			}
			
			if(this.readyState == 4 && this.status == 404)
			{
				throw '加载'+url+'失败'
			}
		}
	}
	
	
	/**
	 * 加载TEXT(包含js css html text)
	 */
	function loadTEXT(url,back)
	{
		
		var http = new XMLHttpRequest();
		http.open("GET",url,true); 
		http.send();
		
		http.onreadystatechange = function(e)
		{
			if(this.readyState == 4 && this.status == 200)
			{
				back(http.responseText)
			}
			
			if(this.readyState == 4 && this.status == 404)
			{
				throw '加载'+url+'失败'
			}
		}
	}
}
