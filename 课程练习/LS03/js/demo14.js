/**
 * Created by qile on 2017/8/14.
 */

//Part 000000000
//字符串比较(若前者参数大于后者参数则返回大于0的数；若前者参数小于后者参数，则返回小于0的数；若两个参数相等则返回0)
console.log("A" > "a");//false
console.log("B".localeCompare("A"));//1 //考虑本地化的字符排序，返回0或非0
console.log("A".localeCompare("A"));//0 //考虑本地化的字符排序，返回0或非0
console.log("A".localeCompare("B"));//-1

//字符串链接
var a = "abc";
var b = "def";
var c = a+b;

//Part 111111111 字符串提取
//String.prototype.charAt(pos);返回在字符串pos位置的字符（以字符串的形式）
//String.prototype.charCodeAt(pos);返回在字符pos位置的字符的码位
//String.prototype.slice(start,end?);截取字符串，起始位置start，结束位置end（不包括end）
//String.prototype.substr(start,length?);从start位置开始，截取长度为length的字符串
//String.prototype.substring(start,end?);从start开始到end结束（不包括end）截取字符串
//String.prototype.split(separator?,limit?);使用特定字符将字符串分割成字符串数组

//字符串常用方法，字符串的方法源于String.prototype

var str2 = "abcdef".slice(2);//"cdef"
var str3 = "abcdef".slice(2,5);//"cde"
var str4 = "abcdef".slice(-2);//"ef"
var str5 = "abcdef".slice(2,-2);//"cd"

var arr6 = "abcdef".split("c");//返回数组 ["ab","def"]
var arr7 = "abcdef".split("c",1);// ["ab"]
var arr8 = "abcdef".split("c",2);//["def"]

var str9 = "abcdef".charAt(2);//"c"
var str10 = "abcdef".charCodeAt(3);//100 所在位置字符的对应的
var str11 = "abcdefabcdef".indexOf("d",1);//2   某个字符的个数
var str12 = "abcdefabcdef".indexOf("d",4);//从第4个开始找

//substr 与 substring的区别
var str13 = "abcdefghijklmn";
var str14 = str13.substr(2,5);//后一个参数代表长度
console.log(str13,str14);//str13 未受到破坏

var str15 = str13.substring(2,5);//后一个参数代表第几个end
console.log(str13,str15);//str13 未受到破坏



//Part 222222222 字符串变换
//String.prototype.trim( );从一个字符串的两端删除空白字符
//String.prototype.concat(str1?,str2?);将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回。
//String.prototype.toLowerCase( );将字符串所有字符转换为小写形式
//String.prototype.toLocaleLowerCase( );根据任何特定于语言环境的案例映射，返回调用字符串值转换为小写的值。
//String.prototype.toUpperCase( );将调用该方法的字符串值转换为大写形式，并返回
//String.prototype.toLocaleUpperCase( );根据任何特定于语言环境的案例映射，返回调用字符串值转换为大写的值。
var str16 = "aaa".concat("bbb");//返回字符串
var str17 = "    abc def     \r\n  ".trim();//返回已移除前导空格、尾随空格和行终止符的原始字符串
var str18 = "abcDEF".toLowerCase();
var str19 = "abcDEF".toUpperCase();

//Part 333333333 检索和比较
//String.prototype.indexOf(searchingString,position?);查找字符串所在位置
//String.prototype.lastIndexOf(searchingString,position?);在指定的字符中的最后一个匹配项的从零开始的索引位置，若为找到该字符，返回-1
//String.prototype.localeCompare(other);比较两个指定的字符串并返回一个整数，指示字符串之间的词法关系。
var indexOf = "abcDEFabcDEFabcDEF".indexOf("D",6);
var lastIndexOf = "abcDEFabcDEFabcDEF".lastIndexOf("D");

//Part 444444444 与正则相关的方法 详细内容参见正则表达式章节
//String.prototype.search(regexp);测试该字符串对象与一个正则表达式是否匹配
//String.prototype.match(regexp);检索返回一个字符串匹配正则表达式的的结果。
//String.prototype.replace(regexp);返回一个由替换值替换被替换值的新字符串

//其余部分参见《深入理解JS》第12章