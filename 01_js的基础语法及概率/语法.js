//函数和方法的区别
//函数function:独立的function,称之为一个函数
function foo()
{
    console.log("你好");
}
//方法method:当我们的一个函数属于某一个对象的时候,我们称这个函数为这个对象的方法
var obj={
    foo:function(){
        console.log("hello");
    }
}
obj.foo()
foo()