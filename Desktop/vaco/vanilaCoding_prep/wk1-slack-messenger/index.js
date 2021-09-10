const CHAT_HISTORY = [
  {
    type: "image",
    url: "https://i.ibb.co/cys3cBZ/Image-from-i-OS-10.jpg",
    username: "김찬중",
    color: "#b17fc1",
    createdAt: "2021-07-10T11:48:10.000Z"
  },
  {
    type: "text",
    content: "부적은 잘 있습니다.",
    username: "김찬중",
    color: "#b17fc1",
    createdAt: "2021-07-10T11:48:13.000Z"
  },
  {
    type: "text",
    content: "진품명품 나가요?",
    username: "김도희",
    color: "#0b218b",
    createdAt: "2021-07-10T11:48:20.000Z"
  },
  {
    type: "text",
    content: "네네 도희님이 사시나요?",
    username: "김찬중",
    color: "#b17fc1",
    createdAt: "2021-07-10T11:49:33.000Z"
  },
  {
    type: "text",
    content: "네?",
    username: "김도희",
    color: "#0b218b",
    createdAt: "2021-07-10T11:50:32.000Z"
  },
  {
    type: "text",
    content: "도희 사시 아니예요",
    username: "Soin Na",
    color: "#d1c17b",
    createdAt: "2021-07-10T11:50:28.000Z"
  },
  {
    type: "text",
    content: "저희 할머니네 도자기랑 교환하실래요?",
    username: "김도희",
    color: "#0b218b",
    createdAt: "2021-07-10T11:51:43.000Z"
  },
  {
    type: "image",
    url: "https://i.ibb.co/KsrBkYw/Image-from-i-OS-11.jpg",
    username: "김도희",
    color: "#0b218b",
    createdAt: "2021-07-10T11:51:55.000Z"
  },
  {
    type: "text",
    content: "할머니가 진품명품에 내달라고 부탁했는데",
    username: "김도희",
    color: "#0b218b",
    createdAt: "2021-07-10T11:51:57.000Z"
  },
  {
    type: "text",
    content: "오오 진짜 이쁘네요 도자기",
    username: "김찬중",
    color: "#b17fc1",
    createdAt: "2021-07-10T11:52:21.000Z"
  },
  {
    type: "text",
    content: "그럼 안녕히계십시오",
    username: "김찬중",
    color: "#b17fc1",
    createdAt: "2021-07-10T11:52:22.000Z"
  },
  {
    type: "text",
    content: "원장님은 아이스크림 심부름중,,, 터벅터벅,,",
    username: "최한나",
    color: "#dc2edb",
    createdAt: "2021-07-10T11:58:09.000Z"
  },
  {
    type: "image",
    url: "https://i.ibb.co/Mnz4ysz/i-OS.jpg",
    username: "최한나",
    color: "#dc2edb",
    createdAt: "2021-07-10T11:58:12.000Z"
  },
  {
    type: "text",
    content: "여기서 보셔도 돼요 https://i.ibb.co/Mnz4ysz/i-OS.jpg",
    username: "최한나",
    color: "#dc2edb",
    createdAt: "2021-07-10T11:59:51.000Z"
  },
];

function createTextMessage(data) {
  return `
    <div class="meta">
      <span class="time">${prettifyISOString(data.createdAt)}</span>
      <span
        class="username"
        style="color: ${data.color};"
      >${data.username}</span>
    </div>
    <p class="content">${convertToLink(data.content)}</p>
  `;
}

function createImageMessage(data) {
  return `
    <div class="meta">
      <span class="time">${prettifyISOString(data.createdAt)}</span>
      <span
        class="username"
        style="color: ${data.color};"
      >${data.username}</span>
    </div>
    <image class="content" src="${data.url}">
  `;
}

function convertToLink(content) {
  // TODO: 인자로 전달되는 텍스트 내용 중에 http:// 혹은 https:// 로 시작하는 텍스트는 a 태그를 이용하여 링크로 변환해주세요.
  // 정규표현식을 사용하지 마세요.
  return content;
}

function prettifyISOString(iso) {
  // TODO: 인자로 전달되는 ISO String을 "시간:분" 형태로 변환하여 반환하세요. 예) "20:13"
  // 정규표현식을 사용하지 마세요.
  return "20:13";
}

const messageListElement = document.querySelector(".message-list");

for (let i = 0; i < CHAT_HISTORY.length; i++) {
  const chat = CHAT_HISTORY[i];

  const messageElement = document.createElement("li");

  if (chat.type === "text") {
    messageElement.innerHTML = createTextMessage(chat);
  } else if (chat.type === "image") {
    messageElement.innerHTML = createImageMessage(chat);
  }

  messageElement.classList.add("message");
  messageListElement.appendChild(messageElement);
}
