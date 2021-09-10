const msgList = document.querySelector(".message-list");
const input = document.getElementById("message");

const chats = [
  {
    type: "image",
    url: "https://i.ibb.co/cys3cBZ/Image-from-i-OS-10.jpg",
    username: "김찬중",
    color: "#b17fc1",
    createdAt: "2021-07-10T11:48:10.000Z"
  },
  {
    type: "text",
    content: "나쵸는 잘 있습니다.",
    username: "김찬중",
    color: "#b17fc1",
    createdAt: "2021-07-10T11:48:13.000Z"
  }
];

window.onunload = function () {
  debugger;
};

//로딩하기
function loadList() {
  return fetch("./data.jason")
    .then((response) => response.json())
    .then((json) => console.log(json.chats));
}

// loadList()
//   .then((chats) => console.log(chats))
//   .catch(console.log("제이슨 안옴"));

// //함수1
// function createTextMessage(data) {
//   return `
//     <div class="meta">
//       <span class="time">${prettifyISOString(data.createdAt)}</span>
//       <span
//         class="username"
//         style="color: ${data.color};"
//       >${data.username}</span>
//     </div>
//     <p class="content">${convertToLink(data.content)}</p>
//   `;
// }

// //함수2
// function createImageMessage(data) {
//   return `
//     <div class="meta">
//       <span class="time">${prettifyISOString(data.createdAt)}</span>
//       <span
//         class="username"
//         style="color: ${data.color};"
//       >${data.username}</span>
//     </div>
//     <image class="content" src="${data.url}">
//   `;
// }

//add lists to UI

// for (let i = 0; i < chats.length; i++) {
//   console.log("showList 함");
//   const chat = chats[i];

//   const li = document.createElement("li");

//   if (chat.type === "text") {
//     li.innerHTML = createTextMessage(chat);
//   } else if (chat.type === "image") {
//     li.innerHTML = createImageMessage(chat);
//   }

//   li.classList.add("message");
//   msgList.appendChild(li);
// }

// function 3 add link to textmsg with http://
// function convertToLink(content) {
//   if (content.includes("https://")) {
//     const link = document.createElement("a");
//     link.innerHTML = content;
//     link.setAttribute("href", "#");
//     return content;
//   }
//   let newContent = `<a>${content}</a>`;
//   return newContent;
// }

// //function 4 chnage time format

// function prettifyISOString(iso) {
//   // TODO: 인자로 전달되는 ISO String을 "시간:분" 형태로 변환하여 반환하세요. 예) "20:13"
//   const date = new Date(iso);

//   const hour = date.getHours();
//   const mins = date.getMinutes();

//   return `${hour} : ${mins}`;
// }

// //function 6 clear List
// function clearList() {
//   msgList.innerHTML = "";
//   console.log("지워벌임!!");
// }

// //function 7 add new text

// function addNewText(e) {
//   if (e.key === "Enter") {
//     const val = e.target.value;
//     const time = new Date();
//     let newText = {
//       type: "text",
//       content: val,
//       color: "#dc2edb",
//       createdAt: time
//     };
//     chats.push(newText);
//     console.log(chats);
//   }
// }

// // //function 5 add new text
// input.addEventListener("keypress", addNewText);
