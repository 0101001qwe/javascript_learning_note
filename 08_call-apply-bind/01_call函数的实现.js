//给所有函数添加一个hycall方法
Function.prototype.hycall=function(thisArg,...args){//剩余参数获取传入的参数
    //1.获取需要调用的函数
    var fn=this
    //2.对thisArg进行类型转换
    thisArg=thisArg?Object(thisArg):window//保证类型的相同并且在传入undefiend/null时返回window
    thisArg.fn=fn//显示调用
    // fn(...args)
    var result=thisArg.fn(...args)//创建对象接受返回值
    return result
}


function foo()
{
    console.log("foo函数调用",this);
}
function sum(num1,num2)
{
    console.log("sum函数实现",this,num1,num2);
    return num1+num2
}

foo.call("abc")
foo.hycall("abc")
sum.hycall(undefined)
console.log(sum.hycall("abc",1,2));