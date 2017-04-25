/**
 * 外观模式(为系统提供统一入口)
 */
function Facade()
{
	this.register = function()
	{
		new Gongshang().jiancha();
		new Yinghang().kaihu();
		new Shuiwuju().dengji();
	}
}


/**
 * 工商局
 */
function Gongshang()
{
	
	/**
	 * 检查名字
	 */
	this.jiancha = function()
	{
		console.log("检查名字是否有冲突")
	}
	
}



/**
 * 银行
 */
function Yinghang()
{
	
	/**
	 * 开户
	 */
	this.kaihu = function()
	{
		console.log("在中国工商银行开户")
	}
	
}



/**
 * 税务局
 */
function Shuiwuju()
{
	
	/**
	 * 登记
	 */
	this.dengji = function()
	{
		console.log("在海淀区税务局办理登记证")
	}

}


/**
 * 使用
 */


new Facade().register();