function sayHello(person) {
    return 'Hello, ' + person;
}
;
var user = 'Tom';
console.log(sayHello(user));
// console.log(one(user));
// 布尔值
var buer1 = false;
var buer2 = Boolean(1);
var buer3 = new Boolean(1);
// 数值
var num1 = 20;
var num2 = 10; //二进制
var num3 = 0xffff; //十六进制
var num4 = 484; //八进制
var num5 = NaN;
var num6 = Infinity;
var num7 = Number(1);
var num8 = new Number(1);
// 字符串
var str1 = "Beijing";
var str2 = "小明";
var str3 = "Welcome to " + str1 + ", I'm " + str2 + ", I'm " + num1 + " years old\u3002";
var str4 = String("shandong");
var str5 = new String("shandong");
console.log(str2);
// 空值 void   
// 表示没有任何返回值的函数
function alertWorld() {
    alert("hello World!");
    // return "hello World!" //如果返回会报错
}
// void声明的变量只能赋值null、undefined
var bianliang1 = null;
var bianliang2 = undefined;
// null
var n = null;
//undefined
var u = undefined;
// null、undefined是所有类型的子类型可以赋值给其他类型
num1 = n;
num1 = u;
// num1 = bianliang1  //此条错误void类型不能赋值给其他类型
// any 任意值
var anyThing = "hello";
console.log(anyThing.name);
// console.log(anyThing.setName("Tom"))
// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型
var someThing;
someThing = "hello";
someThing = 2;
// 类型推论：如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型
var something = "hello";
// something = 2  // 报错
// 联合类型：表示取值可以为多种类型中的一种
var myFavoriteNumber;
myFavoriteNumber = "hello";
myFavoriteNumber = 2;
// myFavoriteNumber = true //报错
// 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法
/* function getLength(something: string | number): number {
  return something.length  //因为.length不是string、number的公有属性，所以报错
} */
function getLength(something) {
    return something.toString();
}
console.log(getLength(22));
// 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型
var myFavoriteString;
myFavoriteString = "hello";
console.log(myFavoriteString.length);
myFavoriteString = 2;
// 赋值的时候，变量的形状必须和接口的形状保持一致。多属性和少属性都会报错
var tom = {
    name: "Tom",
    age: 20
};
var Tom = {
    name: "tom"
};
var Jerry = {
    name: 'jerry',
    age: 20,
    sex: "男",
    tow: "wqwe"
};
var jerry = {
    name: "Jerry",
    age: 20,
    id: 101011
};
// jerry.id = 2020  //报错，只读属性不能修改
// 数组
// 「类型 + 方括号」表示法，数组中不允许出现其他类型
var arr1 = [1, 2, 3, 4];
// arr1.push("9")  //报错，方法也会因为类型受限制
// 数组泛型
var arr2 = [1, 2, 3, 4];
var arr3 = [1, 2, 3, 4];
// arr3.push("2")  //报错
// 类数组：类数组（Array-like Object）不是数组类型，比如 arguments
function sum() {
    var args = arguments;
    // let args: number[] = arguments;  //报错
}
// any在数组中的应用
var arr4 = [1, "2", { name: "qwe" }];
// 函数
// 声明式
function fun1(x, y) {
    return x + y;
}
// fun1(1)  // 报错
// fun1(1, 2, 3)  //报错
// 表达式: 注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>,在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
var fun2 = function (x, y) {
    return x + y;
};
// 用接口定义函数的形状
