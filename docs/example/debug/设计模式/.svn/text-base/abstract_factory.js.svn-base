/**
 * 抽象工厂（专门用一个类来创建工厂或实例）
 */


		/**
		 * 矢量图工厂
		 */
		function ShapeFactory(name)
		{
		    var shape;
		
		    switch(name)
		    {
		        case 'rect':
		            shape = new Rect()
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
		 * 位图工厂
		 */
		function BitmapFactory(name)
		{
		    var bitmap;
		
		    switch(name)
		    {
		        case 'rect':
		            bitmap = new Rect()
		            break
		
		        case 'circle':
		            bitmap = new Circle()
		            break
		
		        case 'line':
		            bitmap = new Line()
		            break
		
		        case 'arrow':
		            bitmap = new Arrow()
		            break
		    }
		
		    return shape;
		}
		
		
		/**
		 * 抽象工厂
		 */
		function DrawFactory(name,type)
		{
		    var factory;
		
		    switch(name)
		    {
		        case 'shape':
		            factory = new ShapeFactory(type)
		            break
		
		        case 'bitmap':
		            factory = new BitmapFactory(type)
		            break
		    }
		
		    return shape;
		}
		
		
		/**
		 * 应用
		 */
		var rect = new DrawFactory('shape','rect')