/**
 * 单例
 */


/**
 * 全局变量，其实就是单例
 */
window.count = 0;


function index()
{
    count +=1

    function content()
    {
        count +=1
    }
}


/**
 * 标准实现单例
 */
function Singleton()
{
    this.count = 0;

    if(Singleton.interface !== undefined)
    {
        return Singleton.interface;
    }

    //静态属性
    Singleton.interface = this;
}


var s1 = new Singleton();

var s2 = new Singleton();

console.log(s1 == s2)  //输出：true