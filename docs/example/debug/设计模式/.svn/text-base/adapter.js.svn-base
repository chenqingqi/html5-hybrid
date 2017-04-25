/**
 * 适配器（适配不兼容的系统接口）
 */




/**
 * 老系统
 */
var AppUser = {

    name:'app'
}


/**
 * 实现登录
 */
function login(obj)
{
    console.log(obj.name)
}

login(AppUser)  //输出：app；




/**
 * 需要兼容的新增系统
 */
var WebUser = {

    username:'网站'
}

var WeixinUser = {

    account :'微信'
}



/**
 * 适配器
 */
function Adapter(obj)
{
    var name;

    if(obj.name !== "undefined")
    {
        name = obj.name;
    }

    if(obj.username !== "undefined")
    {
        name = obj.username;
    }

    if(obj.account !== "undefined")
    {
        name = obj.account;
    }

    return{

        name:name
    }
}


/**
 * 应用
 */
login(new Adapter(WeixinUser));