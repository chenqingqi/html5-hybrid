/**
 * 工厂（专门用一个类来创建其他类的实例）
 */
		function ShapeFactory(name)
		{
		    var shape;
		
		    switch(name)
		    {
		        case 'rect':
		            shape = new Shape()
		            break
		
		        case 'circle':
		            shape = new Circle()
		            break
		
		        case 'line':
		            shape = new Line()
		            break
		
		        case 'arrow':
		            shape = new Arrow()
		            break
		    }
		
		    return shape;
		}
		
		
		/**
		 * 应用
		 */
		var rect = new ShapeFactory('rect');