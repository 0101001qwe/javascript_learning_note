function foo(){
    console.log("foo函数调用");
}
function sum(num1,num2,num3){
    console.log(arguments);
    //直接遍历传入
    var newarray=[]
    for(var i =0;i<arguments.length;i++)
    {
        newarray.push(arguments[i])
    }
    newarray.forEach(function(item)
{
    console.log(item*10);
})
    console.log(newarray);
    console.log("sum函数调用",num1,num2,num3,this);
    //将arguments转为array
    var newarray2=Array.prototype.slice.call(arguments)
    

    var newarray3=[].slice.call(arguments)
    console.log(newarray2,newarray3);

    //ES6的语法
    var newarray4=Array.from(arguments)
    console.log(newarray4);
    var newarray5=[...arguments]//...遍历方法
    console.log(newarray5);
}
sum(1,2,3,4,5)