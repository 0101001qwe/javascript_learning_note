var nums=[12,34,24,43,56]
//1.fliter函数:过滤函数 以下为过滤数组中的偶数
var newnums=nums.filter(function(item)
{
    if(item%2==0)
    {
        return true//输出数组中的偶数
    }
})
console.log(newnums);

//2.map函数:映射
var newnums1=nums.map(function(item)
{
    return item*2
})
console.log(newnums1);//输出*2后的数组

//3.forEach:迭代 遍历数组没有返回值
nums.forEach(function(item)
{
    console.log(item);//将数组进行输出
})

//4.find/findIndex
var item=nums.find(function(item)
{
    if(item/2==0)
    {
        return true//进行数组查找 找第一个偶数
    }
})
console.log(item);
var itemIndex=nums.findIndex(function(item)
{
    if(item%2==0)
    {
        return true//查找第一个偶数的索引
    }
})
console.log(itemIndex);

//5.reduce累加
var total=nums.reduce(function(preValue,item){
    return preValue+item
},0)
console.log(total);