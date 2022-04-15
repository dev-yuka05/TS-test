let root = document.querySelector('#root');

// 개간지나는 Optional Chaining임
if(root?.innerHTML != undefined){
    // 제목에 innerHTML이 있으면 출력하고 없으면 undefined 뱉어줌
    root.innerHTML = "Hello, World!";
}
