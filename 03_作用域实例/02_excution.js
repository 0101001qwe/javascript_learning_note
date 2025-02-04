console.log("hello");
var age=123

function foo()
{
    console.log(age);//输出defined
    var age="1234"
    console.log(age);//输出1234
    console.log("foo");
}
foo()