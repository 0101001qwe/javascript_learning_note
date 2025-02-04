//rest parameters
function sum(...sums)
{
    console.log(sums);
}


sum(10)
sum(10,20)
sum(10,20,30)


//展开运算符spread

var name=["abc","acd","123"]
var newname=[...name]//依次遍历每一个元素
console.log(newname);