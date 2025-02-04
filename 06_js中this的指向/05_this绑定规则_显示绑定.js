//函数的显示绑定
function foo()
{
    console.log("函数调用"+this);
}
foo.apply("abc")
foo.call("abd")
//call和apply的区别
function sum(num1,num2)
{
    console.log(num1+num2,this);
}
sum.apply("abc",[20,30])
sum.call("abd",20,30)
//bind需要返回对象并且进行直接绑定
var fn=foo.bind("aaa")
fn()