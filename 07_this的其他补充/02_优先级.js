var obj={
    name:"abc",foo:
    function()
    {
        console.log(this);
    }
}

// obj.foo()
//call,apply的显示绑定高于隐式绑定
// obj.foo.apply("aec")
//bind的优先级比较
var a=obj.foo.bind("eee")
a()
//更加明显的比较

function foo()
{
    console.log(this);
}

 var aa={
    name:123,
    fn:foo.bind("qwe")
 }
 aa.fn()


//new绑定优先级大于显示绑定
var bar =foo.bind("123")
var p=new bar("qwe")
 