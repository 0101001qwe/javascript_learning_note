// //默认绑定:独立函数调用
// //1.函数直接调用
// // function foo()
// // {
// //     console.log(this);
// // }
// // foo()
//2.函数嵌套调用
// function foo()
// {
//     return function()
//     {
//         console.log(this);
//     }
// }
//3.函数中调用函数
// function foo()
// {
//     console.log(this);
// }
// function foo1()
// {
//     console.log(this);
//     foo()
// }
// function foo2(){
//     console.log(this);
//     foo1()
// }
// foo2()
//4.
// const obj={
//     name:"why",
//     foo:function{
//         console.log(this);
//     }
// }
// obj.foo()