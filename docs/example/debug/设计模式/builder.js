/**
 * 生成器（实例化一批特定组合的对象）
 */

/**
 * 套餐一
 */
function Builder()
{

    /**
     * 产品
     */
    var product = [];


    /**
     * 组装
     */
    function getProduct()
    {
        product.push('汉堡');
        product.push('薯条');
        product.push('可乐');

        return product;
    }

    return{

        getProduct:getProduct
    }
} 


var builder = new Builder();

console.log(builder.getProduct())
