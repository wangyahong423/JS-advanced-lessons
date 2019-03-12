/**
 * Created by qile on 2017/8/14.
 */
//Number构造器属性（静态属性）
Number.MAX_VALUE
Number.MIN_VALUE
Number.NaN
Number.NEGATIVE_INFINITY
Number.POSITIVE_INFINITY

//Number原型方法(Number对象继承的方法）
// Number.prototype.toFixed();
// Number.prototype.toPrecision();
// Number.prototype.toString();
// Number.prototype.toExponential();

var n1 = 12345.6789;
console.log(n1.toFixed(2));//12345.68。n1.toFixed(2)括号中是几，就保留几位小数，并对最后一位小数进行进位判断与处理
console.log(n1.toPrecision(2));//1.2e+4。对所取的最后一位做进位判断与处理
console.log(n1.toString());//12345.6789。将数字转化为一个字符串
console.log(n1.toExponential(2));//1.23e+4。n1.toExponential(2));中的数字是几就保留几位小数，并对最后一位小数进行进位判断与处理。

//
console.log(NaN === NaN);//false
console.log(isNaN("12,3"));//true
console.log(Math.floor(3.8));//3，向下取整
console.log(Math.floor(-3.8));//-4，向下取整
console.log(Math.ceil(3.2));//4，向上取整
console.log(Math.ceil(-3.2));//-3，向下取整
console.log(Math.round(-3.2));//-3，四舍五入的原理是在参数上加0.5然后进行下取整。
console.log(Math.round(-3.5));//-3
console.log(Math.round(-3.8));//-4

//其余部分参见《深入理解JS》第11章

