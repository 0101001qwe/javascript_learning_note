//函数作为函数返回值的案例
function addmaker(count) {  
    function add(num) {  
        return count + num; // 在这里使用 count  
    }  
    return add; // 返回 add 函数  
}  

var add5 = addmaker(5);  
console.log(add5(10)); // 这应该输出 15
console.log("你好");