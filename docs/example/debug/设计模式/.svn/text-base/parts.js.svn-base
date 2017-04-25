/**
 * 组合（构建一个树状结构）
 */

		/**
		 * 树
		 */
		function Tree()
		{
		
		    this.children = [];
		
		
		    /**
		     * 添加节点
		     */
		    this.add = function(v)
		    {
		        this.children.push(v)
		    }
		
		
		    /**
		     * 删除节点
		     */
		    this.del = function(v)
		    {
		        this.children.splice(v,1)
		    }
		
		
		    /**
		     * 查找节点
		     */
		    this.has = function(v)
		    {
		        for(var i=0;i<this.children.length;i++)
		        {
		            if(v == this.children[i])
		            {
		                return true;
		            }
		        }
		
		        return false;
		    }
		}
		
		
		/**
		 * 人
		 */
		function People(j)
		{
		    this.job = j;
		}
		
		
		/**
		 * 应用
		 */
		var director = new Tree(new People('董事长'));
		director.add(new People('COO'));
		director.add(new People('CTO'));
		
		console.log(director.children[0].job) // 输出：COO