/**
 * 解释器模式
 */
		function Chinese()
		{
			this.say = function(value)
			{
				switch(value)
				{
					case 1:
						return '一'
						break
					
					case 2:
						return '二'
						break
					
					default:
					  	return '暂不支持'
					  	break
				}
			}
		}
		
		
		
		function English()
		{
			this.say = function(value)
			{
				switch(value)
				{
					case 1:
						return 'one'
						break
					
					case 2:
						return 'two'
						break
					
					default:
					  	return 'can not explain'
					  	break
				}
			}
		}
		
		
		
		var chinese = new Chinese();
		
		var english = new English()
		
		
		console.log(chinese.say(1))   //一
		console.log(chinese.say(10))  //暂不支持
		console.log(english.say(1))   //one
