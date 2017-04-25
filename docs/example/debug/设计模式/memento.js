/**
 * 备忘录(保存对象的某个状态)
 */

		/**
		 * 备份模板
		 */
		function Memento(p)
		{
			//名字
			this.name  = p.name;
			
			//年龄
			this.age   = p.age;
			
			//性别
			this.sex   = p.sex;
			
			//财富
			this.money = p.money
		}
		
		
		
		/**
		 * 人物
		 */
		function Person()
		{
			
			//名字
			this.name  = '';
			
			//年龄
			this.age   = 0;
			
			//性别
			this.sex   = '男';
			
			//财富
			this.money = 0
			
			
			/**
			 * 还原
			 */
			this.recovery = function(p)
			{
				this.name  = p.name;
				this.age   = p.age;
				this.sex   = p.sex;
				this.money = p.money
			}
			
			
			/**
			 * 备份
			 */
			this.memento  = function()
			{
				return new Memento(this);
			}
		}
		
		
		/**
		 * 历史备份
		 */
		var data = [];
		
		
		//定义人物
		var person = new Person();
		person.name = '张三';
		person.money = 5000;
		
		
		//备份
		data.push(person.memento())
		
		
		//修改人物状态
		person.money = 100;
		
		
		//还原财富初始值
		person.recovery(data[0]);
		
		
		//测试
		console.log(person.money)  //输出：5000