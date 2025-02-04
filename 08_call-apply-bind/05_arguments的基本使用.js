function foo(num1,num2,num3)
{
    //类数组对象(长的像数组,实际上是一个对象):arguments
   console.log(arguments); 

   //常见的三种arguments的用法
   //1.打印长度
   console.log(arguments.length);
   //2.调用函数索引
   console.log(arguments[3]);
   console.log(arguments[4]);
   //3.调用函数本身(递归)
   console.log(arguments.callee);

}

foo(10,20,30,40,50)