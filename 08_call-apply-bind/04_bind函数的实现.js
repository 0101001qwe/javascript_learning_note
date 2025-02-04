//创建hybind的构造函数
Function.prototype.hybind=function(thisArg,...args){
    var fn=this
    //
    thisArg=thisArg?Object(thisArg):window
    thisArg.this=fn
    function proxyfn(...argsment){
        
    return thisArg.this(...args,...argsment)
    
    }
    return proxyfn
}
function foo()
{
    console.log("foo函数被调用");
    return 20
}
function sum(num1,num2,num3){
    console.log(num1,num2,num3);
    console.log(this);
    return num1+num2+num3
}

// var result=foo()
// console.log(result);
// console.log(foo.hybind())

// var result=sun.bind("abc",1,2)
// console.log(result(3));

var result=sum.hybind("abc",1,2)
console.log(result(3));