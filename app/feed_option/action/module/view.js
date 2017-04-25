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
		
		$('body').visible(true)
	}
	
	
	return{
		
		createList:createList
	}

})
