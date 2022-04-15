let root = document.querySelector('#root');
// root는 타입이 Element | null 이라 확실하지않음

// 그래서 타입 하나로 narrowing 하면 됨
if(root != null){
    // 그래서 root가 null 아니면 실행하게 하면 됨
    root.innerHTML = "Hello, World!";
}
