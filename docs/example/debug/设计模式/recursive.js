/**
 * 递归(函数调用自身) 
 */
function print(x)
{
    if(x>0)
    {
        document.write(x+'<hr/>');

        print(x-1);
    }
}

print(10);