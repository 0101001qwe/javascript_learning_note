var name="why"

var foo=()=>{
    console.log(this);
}
//箭头函数中的this没有绑定 下面结果全部都是window
foo()
 var obj=foo
obj()
foo.apply("abc")

//应用场景
var aaa = {  
    data: [],  
    fn: function() {  
        setTimeout(function() {  
            var result = ["abc", "adf", "213"];  
            this.data = result; // 注意：这里的 `this` 指向全局对象，不是 `aaa`  
            console.log('Inside regular function:', this.data); // 输出数据  
        }, 2000);  
//箭头函数没有绑定this 指向的还是上级作用域
        setTimeout(() => {  
            var result = ["abc", "adf", "213"];  
            this.data = result; // 这里 `this` 指向 `aaa`  
            console.log('Inside arrow function:', this.data); // 输出数据  
        }, 2);  
    }  
}  

aaa.fn();