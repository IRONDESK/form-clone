# 구글 폼 클론

## 사용 스택
 * React with TypeScript
 * styled-components
 * Redux, Redux-toolkit
 * eslint, prettier

## File-tree
```js
📦src
 ┣ 📂app
 ┃ ┗ 📜store.ts
 ┣ 📂components
 ┃ ┣ 📂Form
 ┃ ┃ ┣ 📜Item.tsx
 ┃ ┃ ┣ 📜ItemOption.tsx
 ┃ ┃ ┣ 📜MainForm.tsx
 ┃ ┃ ┗ 📜TypeSelector.tsx
 ┃ ┣ 📂Main
 ┃ ┃ ┗ 📜List.tsx
 ┃ ┗ 📂Preview
 ┃ ┃ ┣ 📜ItemCard.tsx
 ┃ ┃ ┗ 📜ViewContents.tsx
 ┣ 📂hooks
 ┃ ┗ 📜usePreview.ts
 ┣ 📂pages
 ┃ ┣ 📜App.tsx
 ┃ ┗ 📜Create.tsx
 ┣ 📂store
 ┃ ┗ 📜Preview.ts
 ┣ 📂styles
 ┃ ┣ 📜constants.ts
 ┃ ┣ 📜global.css
 ┃ ┗ 📜reset.css
 ┣ 📂types
 ┃ ┗ 📜PollDataType.ts
 ┣ 📜.DS_Store
 ┣ 📜Routes.tsx
 ┗ 📜index.tsx
```

## 스크린샷
* 메인 페이지
<img width="560" alt="스크린샷 2022-08-30 오전 1 49 13" src="https://user-images.githubusercontent.com/87234410/187252609-a0029acf-ae70-4d53-b0d5-4a7300cf8c7f.png">

* 폼 생성 화면
<img width="560" alt="스크린샷 2022-08-30 오전 1 56 22" src="https://user-images.githubusercontent.com/87234410/187253826-3525f197-e2eb-476d-a922-3358bd6bbf21.png">

* 미리보기 화면
<img width="460" alt="스크린샷 2022-08-30 오전 1 59 42" src="https://user-images.githubusercontent.com/87234410/187254353-a309eeb7-cbe3-4344-8a68-30a90ca730d9.png">
