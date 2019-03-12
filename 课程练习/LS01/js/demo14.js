/**
 * Created by qile on 2017/9/7.
 */
//JS对象
//通过字面量创建
var student = {
    name:"Jack",
    age:23,
    sayHi:function () {
        console.log("Hi,i'm",this.name,",i'm",this.age,"years old!");
    }
};
console.log(student.name);//Jack
console.log(student["age"]);//23
console.log(student.sayHi);//function(){console.log("Hi,i'm",this.name,",i'm",this.age,"years old!");}
student.sayHi();//Hi,i'm Jack,i'm 23 years old!

//添加属性，删除属性
student.id = 2015015001;
console.log(student.id);//2015015001
delete  student.id;
console.log(student.id);//undefined

//查看对象是否有某个属性 in   for...in   Object.keys()
console.log("name" in student);//true
for(var k in student){
    console.log(k,student[k]);//name Jack 
                                //age 23
                                //sayHi function(){console.log("Hi,i'm",this.name,",i'm",this.age,"years old!");}
}
console.log(Object.keys(student));//(3)["name","age","sayHi"]

//JS对象详细内容参见 JS对象章节
//函数嵌套 与this问题初步了解
var obj = {
    foo:function () {
        console.log("foo里的this:",this);
        function fee() {
            //"use strict"
            console.log("fee里的this:",this);
        }
        fee();
    }
};
obj.foo();
//foo里的this:foo函数
//fee里的this：Window函数

//构造函数回顾 JS面向对象具体内容 参见后续面向对象章节
function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.showInfo = function () {
    console.log("Hi,i'm",this.name,",i'm",this.age,"years old!");
};

var p1 = new Person("Mike",60);
p1.showInfo();
//Hi,i'm Mike,i'm 60 years old!