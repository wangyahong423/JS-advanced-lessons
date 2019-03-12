/**
 * Created by qile on 2017/9/7.
 */
//字符串链接
var a = "abc";
var b = "def";
var c = a+b;

//字符串常用方法，字符串的方法源于String.prototype
var str1 = "aaa".concat("bbb");//返回字符串  "aaabbb"
var str2 = "abcdef".slice(2);//"cdef"
var str3 = "abcdef".slice(2,5);//"cde"
var str4 = "abcdef".slice(-2);//"ef"
var str5 = "abcdef".slice(2,-2);//"cd"

var str6 = "abcdef".split("c");//返回数组  ["ab","def"]
var str7 = "abcdef".split("c",1);//["ab"]
var str8 = "abcdef".split("c",2);//["ab","def"]

var str9 = "abcdef".charAt(2);//"c"
var str10 = "abcdefabcdef".indexOf("d",1);//从第一个字符开始找字符d，下标为3
var str11 = "abcdefabcdef".indexOf("d",4);//从第4个开始找 ，结果为9

var str12 = "    abc def     \r\n  ".trim();//返回已移除前导空格、尾随空格和行终止符的原始字符串

//substr 与 substring的区别
var str13 = "abcdefghijklmn";
var str14 = str13.substr(2,5);//后一个参数代表长度（从下标为2的字符开始取长度为5的字符串），结果为"cdefg"
console.log(str13,str14);//str13 未受到破坏   结果为："abcdefghijklmn"   "cdefg"

var str15 = str13.substring(2,5);//后一个参数代表第几个字符end（不包括以第二个参数为下标的字符），结果为"cde"
console.log(str13,str15);//str13 未受到破坏 ， 结果为"abcdefghijklmn"  "cde"
