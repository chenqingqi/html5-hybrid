/**
 * 桥接
 */


/**
 * 笔触
 */
function Pen(color,shape)
{

    /**
     * 铅笔
     */
    this.pencil = function()
    {
        shape.draw(color.value);

        console.log('应用铅笔滤镜');
    }


    /**
     * 粉笔
     */
    this.chalk = function()
    {
        shape.draw(color.value);

        console.log('应用粉笔滤镜');
    }
}


/**
 * 颜色
 */
function Color()
{
    this.value = '红色'
}


/**
 * 图形
 */
function Shape()
{
    this.draw = function(color)
    {
        console.log('绘制'+color+'图形') 
    }
}


/**
 * 应用
 */
var pen = new Pen(new Color(),new Shape())

pen.pencil();  //输出：绘制红色图形，应用铅笔滤镜