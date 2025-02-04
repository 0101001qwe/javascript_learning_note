Function.prototype.hyapply = function(thisArg, args) {  
    thisArg = thisArg ? Object(thisArg) : window; // Ensure thisArg is an object  
    thisArg.fn = this; // Assign the function to be called  
    // Call it with provided arguments  
    // Clean up  
    var result=thisArg.fn(...args||[]);
    delete thisArg.fn; 
    return result
}  

// 使用示例  
var bar = function(arg1, arg2) {  
    console.log("bar函数调用", arg1, arg2,this);  
}  

// bar.hyapply("123", ["参数1", "参数2"]);
bar.hyapply("123")
