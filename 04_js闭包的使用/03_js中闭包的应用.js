function foo()
{
    var name='foo'
    function bar()
    {
        console.log("bar",name);//闭包:函数+可以访问的自由变量
    }
    return bar
}
var fn=foo()
fn()