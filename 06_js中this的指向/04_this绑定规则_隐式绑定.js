//通过某个对象发起的调用 this直接指向调用的对象
//1.案例一
var obj={
    name:"obj",
    foo:function()
    {
        console.log(this);
    }
}
obj.foo()//通过对象进行调用
var fn=obj.foo
fn()//通过函数直接调用
var bar={
    name:"obj1",
    foo1:obj.foo
}
bar.foo1()//调用对象不同this的指向也不同