module(['core/extends/element','core/extends/event','core/extends/date','core/extends/string'],function()
{	
	
	/**
	 * 故障时间
	 */
	/*$('time').find('content').innerHTML = new Date().format();
	
	
	/**
	 * 文字内容
	 */
	$('addenda').find('content').addEventListener('click',function(e)
	{
		if(this.innerHTML == '请简要描述你的问题和意见(1000字以内)')
		{
			this.innerHTML = '';
			this.css({'color':'#333333'})
		}
	})
	
	
	/**
	 * 多图上传
	 */
	var add_button = $('photos').find('add');
	var count      = 0;
	add_button.addEventListener('click',function(e)
	{
		file.click();
	})
	
	var file = $('photos').find('file');
	file.addEventListener('change',onFileEvent);
	
	function onFileEvent(e)
	{
		
		
		//检查格式
		if(!this['value'].match(/.jpg|.gif|.png|.bmp/i))
		{　　
            alert("图片格式不正确");
            return;　　　　
		}
		
		//显示预览
		for(var i=0;i<this.files.length;i++)
		{
			
			if(count < 4)
			{
				count +=1;
			
				var reader = new FileReader();
			 	reader.readAsDataURL(this.files[i]);
			 	reader.onload = function(e)
			 	{
			 		var rect = $('<div id="rect"><img id="close" src="/resource/close.png"/></div>');
			 		rect.find('close').onclick = function(e)
			 		{
			 			this.parentNode.remove();	
			 			count -=1;
			 			
			 			if(count < 4)
			 			{
			 				$('photos').find('add').visible(true)
			 			}
			 		}
			 		
			 		var img = $('<img id="pic" src="'+this.result+'"/>');
			 		rect.appendChild(img);
			 		$('photos').insertBefore(rect,$('photos').find('add'));
			 	}
			}
			
		 	
		 	if(count == 4)
			{
				try
				{
					$('photos').find('add').visible(false);
				}
				catch(e)
				{
					
				}
				
				break;
			}
		}
	}
	
	
	/**
	 * 手机号
	 */
	$('mobile').find('content').addEventListener('click',function(e)
	{
		if(this.value == '选填，便于我们给您答复')
		{
			this.value = '';
		}
		
		
		
		window.setTimeout(function()
		{
			$('mobile').scrollIntoView(true)
			
		},500)
	})
	
	
	
	/**
	 * 检查并包装数据
	 */
	function feedData()
	{
		
		//手机号
		var mobile = $('mobile').find('content').value;
		
		if(mobile == '选填，便于我们给您答复')
		{
			mobile = '';
		}
		
		
		//文字内容
		var text   = $('addenda').find('content').value;
		
		if(text == '请简要描述你的问题和意见(1000字以内)')
		{
			text = '';
		}
		
		
		//图片数据
		var file_data = [];
		
		for(var i=0;i<$('photos').children.length;i++)
		{
			if($('photos').children[i].id == 'rect')
			{
				file_data.push($('photos').children[i].find('pic').attr('src').replace(/\+/g,'%2B'));
			}
		};
		
		return JSON.stringify({mobile:mobile,text:text,fileData:file_data})
	}
	
	
	/**
	 * 更改按钮颜色
	 */
	function setButtonColor(value)
	{
		$('submit').css({'background-color':value});
		$('body').visible(true);
	}
	
	
	/**
	 * 提交数据
	 */
	$('submit').addEventListener('click',function(e)
	{
		var data = JSON.parse(feedData());
		
		if(data.mobile !=='')
		{
			if(!data.mobile.isMobile())
			{
				alert('手机号码输入错误');
				
				return;
			}
		}
		
		data.text = data.text.trim();
		
		if(data.text == '')
		{
			alert('描述不能为空');
			return;
		}
		else if(data.text.length>1000)
		{
			alert('字数超过限制');
			return;
		}
		
		dispatchEvent(new Event('SUBMIT',feedData()))
	})
	
	
	
	return{
		
		setButtonColor:setButtonColor
	}
	
})
