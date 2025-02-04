//new绑定类似调用一个函数构造器,这个时候是用this创建出来的一个对象
//this=创建出来的对象
function Person(name,age){
    this.name=name
    this.age=age
}
var p1=new Person("kobe",30)
var p2=new Person("james",35)
console.log(p1,p2);
//new绑定和隐式绑定的冲突问题
var obj={
    foo:function(){
        console.log(this+"函数使用");
    }
}
new obj.foo()