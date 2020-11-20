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
console.log("object")