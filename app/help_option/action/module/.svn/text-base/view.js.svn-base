module(['core/extends/element','core/extends/event'],function()
{
	
	var ui = $('item').outerHTML;
	
	$('item').remove();
	
	
	/**
	 * 创建列表
	 */
	function createList(data)
	{
		$('body').innerHTML = '';
		
		for(var i=0;i<data.length;i++)
		{
			var item = $(ui);
			item.find('span').innerHTML = data[i].title;
			item.attr({tag:data[i].id});
			
			item.onclick = function(e)
			{
				dispatchEvent(new Event('ITEM_CLICK',{id:this.attr('tag'),tag:this.innerText},false));
			}
			
			document.body.appendChild(item);
		}
		
		createHelpBtton();
		
		$('body').visible(true)
	}
	
	
	/**
	 * 创建意见与反馈按钮
	 */
	function createHelpBtton()
	{
		var tip  = $('<p id="feed_tip">您可能还需要</p>')
		document.body.appendChild(tip);
		
		var item = $(ui);
		item.find('span').innerHTML = '意见反馈';
		
		document.body.appendChild(item);
		
		item.onclick = function(e)
		{
			dispatchEvent(new Event('FEED_BUTTON_CLICK',null,false));
		}
	}
	
	
	return{
		
		createList:createList
	}
})
