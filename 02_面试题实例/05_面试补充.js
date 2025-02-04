

function foo()
{
    var a=b=10
    //等价于下面
    //var a=10
    //b=10
    m=100
}
//特殊问题(最好不要用这种语法)
foo()
console.log(m);
console.log(a);
console.log(b);