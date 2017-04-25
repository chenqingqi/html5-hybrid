/**
 * 原型（克隆一个实例）
 */
function People()
{

    /**
     * 钱
     */
    var money = 0;


    /**
     * 克隆
     */
    function clone()
    {
        function Copy(){}
        Copy.prototype = this;
        return new Copy();
    }

    return{

        money:money,
        clone:clone
    }

}

var xiaoming = new People();

xiaoming.money = 1000;


var zhansan = xiaoming.clone();

console.log(zhansan.money) //输出:'1000'