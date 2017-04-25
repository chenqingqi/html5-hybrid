/**
 * 访问者模式 - 从某个角度遍历数据
 */


/**
 * 人员
 */
function Person(_name,_work,_money)
{
	this.name    = _name;
	
	this.work    = _work;
	
	this.money   = _money;
}


/**
 * 公司
 */
function Company()
{
	
	//数据
	var persons = [];
	
	
	/**
	 * 添加
	 */
	this.add = function(_person)
	{
		persons.push(_person)
	}
	
	/**
	 * 获取
	 */
	this.accept = function(visitor)
	{
		console.log(visitor.name+'获取数据：')
		
		for(var i=0;i<persons.length;i++)
		{
			visitor.read(persons[i])
		}
	}
}



/**
 * 财务
 */
function Finance(_name)
{
	this.name = _name;
	
	this.read = function(_person)
	{
		console.log(_person.name+'-'+_person.money);
	}
}


/**
 * 总监
 */
function CTO(_name)
{
	this.name = _name;
	
	this.read = function(_person)
	{
		console.log(this.name+':  '+_person.name+'-'+_person.work);
	}
}


/**
 * 添加员工
 */
var company = new Company();
company.add(new Person('小明','程序员','12k'));
company.add(new Person('小红','设计师','10k'));
company.add(new Person('成龙','业务员','20k'));


/**
 * 财务获取员工数据
 */
company.accept(new Finance('财务'))






