let root = document.querySelector('#root');
// root는 타입이 Element | null 이라 확실하지않음

// 그래서 타입 하나로 narrowing 하면 됨
if(root instanceof Element){
    // instanceof 연산자는 생성자의 prototype 속성이 객체의 프로토타입 어딘가 존재하는지 판별함
    root.innerHTML = "Hello, World!";
}
