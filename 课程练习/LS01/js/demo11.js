/**
 * Created by qile on 2017/9/7.
 */
//条件语句 switch 贯穿在后续课程中介绍

//循环语句
for(var i=0;i<10;i++){
    console.log("i:",i);
}
console.log("out of for:",i);//此时为多少——————此时为10

//break和continue
//练习输出0到20之间的奇数

var i=0;
for(i;i<=20;i++){
    if(i<=20){
        console.log(i);
        continue;
    }
    else{
        break;
    }
}
