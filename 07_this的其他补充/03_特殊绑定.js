//忽略显示绑定 当传入为undefined/null时 this指定为window
function foo()
{
    console.log(this);
}

var obj={
    name:"qwer",
    fn:foo
}
foo.apply(undefined)
obj.fn.call(null)



function foo(el)
{
    console.log(el,this.name);
}
var id={
    name:"qwer"
};
//写文的规范 ; 否则表示为一体
[1,2,3].forEach(foo,id)
//上面等价于
//var id={ name:"qwer"
//}
//var nums=[1,2,3]
//nums.forEach(foo,id)


