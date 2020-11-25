function sayHello(person: string) {
  return 'Hello, ' + person;
};

let user = 'Tom';
console.log(sayHello(user));
// console.log(one(user));

// 布尔值
let buer1: boolean = false
let buer2: boolean = Boolean(1)
let buer3: Boolean = new Boolean(1)

// 数值
let num1: number = 20
let num2: number = 0b1010  //二进制
let num3: number = 0xffff  //十六进制
let num4: number = 0o744  //八进制
let num5: number = NaN
let num6: number = Infinity
let num7: number = Number(1)
let num8: Number = new Number(1)

// 字符串
let str1: string = "Beijing"
let str2: string = "小明"
let str3: string = `Welcome to ${str1}, I'm ${str2}, I'm ${num1} years old。`
let str4: string = String("shandong")
let str5: String = new String("shandong")
console.log(str2)

// 空值 void   
// 表示没有任何返回值的函数
function alertWorld(): void {
  alert("hello World!")
  // return "hello World!" //如果返回会报错
}
// void声明的变量只能赋值null、undefined
let bianliang1: void = null
let bianliang2: void = undefined

// null
let n: null = null

//undefined
let u: undefined = undefined

// null、undefined是所有类型的子类型可以赋值给其他类型
num1 = n
num1 = u
// num1 = bianliang1  //此条错误void类型不能赋值给其他类型

// any 任意值
let anyThing: any = "hello"
console.log(anyThing.name)
// console.log(anyThing.setName("Tom"))
// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型
let someThing;
someThing = "hello"
someThing = 2

// 类型推论：如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型
let something = "hello"
// something = 2  // 报错

// 联合类型：表示取值可以为多种类型中的一种
let myFavoriteNumber: number | string;
myFavoriteNumber = "hello"
myFavoriteNumber = 2
// myFavoriteNumber = true //报错

// 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法
/* function getLength(something: string | number): number {
  return something.length  //因为.length不是string、number的公有属性，所以报错
} */

function getLength(something: string | number): string {
  return something.toString()
}
console.log(getLength(22))

// 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型
let myFavoriteString: number | string;
myFavoriteString = "hello"
console.log(myFavoriteString.length)
myFavoriteString = 2
// console.log(myFavoriteString.length)  //报错因为此时推论成了number类型

// 接口
interface Person {
  name: string
  age: number
}
// 赋值的时候，变量的形状必须和接口的形状保持一致。多属性和少属性都会报错
let tom: Person = {
  name: "Tom",
  age: 20
}
// 可选属性：可选属性的含义是该属性可以不存在。但仍然不允许添加未定义的属性：
interface Child {
  name: string
  age?: number
}

let Tom: Child = {
  name: "tom"
}
// 任意属性:一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型：
// 需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
interface Teacher {
  name: string
  age?: number
  [propName: string]: any
  // [propName: string]: string | number  //或者用联合类型来写
}
let Jerry: Teacher = {
  name: 'jerry',
  age: 20,
  sex: "男",
  tow: "wqwe"
}
// 只读属性：只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
interface Students {
  name: string
  age?: number
  readonly id: number
}
let jerry: Students = {
  name: "Jerry",
  age: 20,
  id: 101011
}
// jerry.id = 2020  //报错，只读属性不能修改

// 数组
// 「类型 + 方括号」表示法，数组中不允许出现其他类型
let arr1: number[] = [1, 2, 3, 4]
// arr1.push("9")  //报错，方法也会因为类型受限制
// 数组泛型
let arr2: Array<number> = [1, 2, 3, 4]
// arr2.push("9")  //报错
// 用接口表示数组
interface NumberArray {
  [index: number]: number
}
let arr3: NumberArray = [1, 2, 3, 4]
// arr3.push("2")  //报错
// 类数组：类数组（Array-like Object）不是数组类型，比如 arguments
function sum() {
  let args: {
    [index: number]: number
    length: number
    callee: Function
  } = arguments
  // let args: number[] = arguments;  //报错
}
// any在数组中的应用
let arr4: any[] = [1, "2", {name: "qwe"}]

// 函数
// 声明式
function fun1(x: number, y: number): number {
  return x + y
}
// fun1(1)  // 报错
// fun1(1, 2, 3)  //报错
// 表达式: 注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>,在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
let fun2: (x: number, y: number) => number = function (x: number, y: number) {
  return x + y
}
// 用接口定义函数的形状
interface funObj {
  (source: string, subString: string): boolean
}
let fun3: funObj
fun3 = function (source: string, subString: string) {
  return source.search(subString) !== -1
}
// 可选参数
function fun4(firstName: string, lastName?: string) {
  if (lastName) {
    return lastName
  }else {
    return firstName
  } 
}
// 报错：需要注意的是，可选参数必须接在必需参数后面。换句话说，可选参数后面不允许再出现必需参数了：
// function fun4(firstName?: string, lastName: string) {
//   if (lastName) {
//     return lastName
//   }else {
//     return firstName
//   }
// }
let funStr1 = fun4("ming", "hong")
let funStr2 = fun4("ming")
// 参数默认值：TypeScript 会将添加了默认值的参数识别为可选参数。此时就不受「可选参数必须接在必需参数后面」的限制了：
// function fun5(firstName: string, lastName: string = "Cat") {
//   return firstName + " " + lastName
// }
function fun5(firstName: string = "Cat", lastName: string) {
  return firstName + " " + lastName
}
let funStr3 = fun5("Tom", "Jerry")
let funStr4 = fun5(undefined, "Tom")
console.log(funStr3)
console.log(funStr4)
// 剩余参数：ES6 中，可以使用 ...rest 的方式获取函数中的剩余参数（rest 参数）
function fun6(array: any[], ...items: any[]) {
  items.forEach(function (item) {
    array.push(item)
  })
}
fun6([], 1, 2, 3)
// 重载：重载允许一个函数接受不同数量或类型的参数时，做出不同的处理
function fun7(x: number): number;
function fun7(x: string): string;
function fun7(x: number | string): number | string {
  if (typeof x === "number") {
    return Number(x.toString().split("").reverse().join(""))
  }else if (typeof x === "string") {
    return x.split("").reverse().join("")
  }
}
console.log(fun7("qwe"))
console.log(fun7(123))

// 类型断言
// 类型断言的用途
//  将一个联合类型断言为其中一个类型
interface duan1 {
  name: string
  fun(): void
}
interface duan2 {
  name: string
  swin(): void
}
function duanFun1(animal: duan1 | duan2) {
  if (typeof (animal as duan2).swin === "function") {
    return true
  }
  return false
}
//  将一个父类断言为更具体的子类
class ApiError extends Error{
  code: number = 0
}
class HttpError extends Error {
  statusCode: number = 200
}
function isApiError(error: Error) {
  if (typeof (error as ApiError).code === "number") {
    return true
  }
  return false
}
//  将任何一个类型断言为any：将一个变量断言为 any 可以说是解决 TypeScript 中类型问题的最后一个手段。
// (window as any).foo = 1
//  将any断言成任何一个具体类型
// function getCacheData(key: string): any {
//   return (window as any).cache[key];
// }
// interface Car {
//   name: string;
//   run(): void;
// }
// const bc = getCacheData('bc') as Car;
// bc.run()
// 类型断言的限制
//  并不是任何一个类型都可以被断言为任何另一个类型。具体来说，若 A 兼容 B，那么 A 能够被断言为 B，B 也能被断言为 A。
// 双重断言：除非迫不得已，千万别用双重断言
interface duan3 {
  run(): void
}
interface duan4 {
  swin(): void
}
function duanFun2(cat: duan3) {
  return (cat as any as duan4)
}
// 类型断言vs类型转换
//  类型断言只会影响 TypeScript 编译时的类型，类型断言语句在编译结果中会被删除。若要进行类型转换，需要直接调用类型转换的方法
function toBoolean(something: any): boolean {
  return Boolean(something)
}
toBoolean(1)
// 类型断言vs类型声明：类型声明是比类型断言更加严格的
// function getCacheData(key: string): any {
//   return (window as any).cache[key];
// }
// interface Cat {
//   name: string;
//   run(): void;
// }
// const tom: Cat = getCacheData('tom');  //tome: Cat,类型声明
// tom.run();