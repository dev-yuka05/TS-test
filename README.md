# TS-test
타입스크립트 공부를 위한 저장소 입니다.


## 시작하기
- Node.js 설치 ( https://nodejs.org/ko/ )
- 터미널에서 `npm install -g typescript`로 타스설치
- `tsc -w`로 타스 빌드 가능. 웹에서는 TS를 못쓰니 TS를 JS로 바꿔줌

<br>
<br>

**웹에 연결**

- `tsc -w` 하면 `파일명.js` 생성되는데 그 파일은 ts 로 작성된거 브라우저가 못읽어서 js로 바꿔준거임.
- 그 `파일명.js`을 그냥 HTML에 연결해주면 끝

<br>
<br>

**아래꺼 넣으셈**

`tsconfig.json` 파일로 프로젝트를 컴파일하는 데 필요한 루트 파일과 컴파일러 옵션을 지정해야함
```json
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "strictNullChecks": true
    }
}
```
[문서를 읽읍시다](https://www.typescriptlang.org/ko/docs/handbook/tsconfig-json.html)
