//箭头函数的定义
//():参数
//=>:箭头
//{}:函数的执行体
fn=(num1,num2,num3)=>{
    return num1+num2+num3
}
function foo(){}
console.log(fn(1,2,3));
fn(1,2,3)

var nums=[23,74,53,66,5,6]
//简写1:如果参数只有一个,()可以省略
nums.forEach(item=>{console.log(item);})//返回为undefined
//简写2:如果函数执行体只有一行代码,那么{}也可以省略
//强调:并且它会默认这行代码的执行结果作为返回值
var newnums=nums.filter(item=>item%2==0)//返回为偶数
console.log(newnums);
console.log(nums.filter(item=>item%2==0).map(item=>item*100).reduce((prevalue,item)=>item))
//简写3:如果函数执行体只有一个返回对象 那么需要加上()
var foo=()=>{
    return ({name:"asd"})
}
console.log(foo());