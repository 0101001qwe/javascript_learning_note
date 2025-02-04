function foo(){
    var bar=()=>{
        console.log(arguments);
    }
    return bar
}
var fn=foo(1,23,4)
fn(1,2,3)

var aaa=(num1,num2,...args)=>{
    console.log(args);
}

