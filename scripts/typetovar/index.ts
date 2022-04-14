// 문자열만 가능
let a : string = "Hello, world!";

// 숫자만 가능
let b : number = 123;

// true 나 false 만 가능
let c : boolean = true;

// undefined만 쓸 수 있음
let d : undefined = undefined;

// null 만 쓸 수 있음
let e : null = null;

// 만약 여러 타입을 사용하고, 이걸 변수에 저장하는것처럼 하고싶다면...
type NameType = string | number;

let userName : NameType  = "Yuka";

// Array에 문자만 들어오게
let f : string[] = ["Hello", "World!"]

// Object 타입
let g : {name:string, age : number} = {name : "Yuka", age:18}
