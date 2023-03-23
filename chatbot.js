// Create the chatbot container
const chatbotContainer = document.createElement("div");
chatbotContainer.classList.add("chatbot", "chatbot--closed");

// Create the chatbot header
const chatbotHeader = document.createElement("div");
chatbotHeader.classList.add("chatbot__header");

const headerText = document.createElement("p");
headerText.innerHTML =
  '<strong>Got a question?</strong> <span class="u-text-highlight">Ask chatGPT</span>';
chatbotHeader.appendChild(headerText);
// chat svg icon
const closeSpeechIcon = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "svg"
);
closeSpeechIcon.classList.add("chatbot__close-button", "icon-speech");
const closeSpeechIconPath = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "path"
);
closeSpeechIcon.setAttribute("fill", "none");
closeSpeechIcon.setAttribute("viewBox", "0 0 22 22");
closeSpeechIcon.setAttribute("stroke-width", "1.5");
closeSpeechIcon.setAttribute("stroke", "currentColor");
closeSpeechIconPath.setAttribute("stroke-linecap", "round");
closeSpeechIconPath.setAttribute("stroke-linejoin", "round");
closeSpeechIconPath.setAttribute(
  "d",
  "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
);
closeSpeechIcon.appendChild(closeSpeechIconPath);
// closeSpeechIcon.innerHTML = '<use xlink:href="#icon-speech"></use>';
chatbotHeader.appendChild(closeSpeechIcon);

// close svg icon
const closeIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
closeIcon.classList.add("chatbot__close-button", "icon-close");
const closeIconPath = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "path"
);
closeIcon.setAttribute("fill", "none");
closeIcon.setAttribute("viewBox", "0 0 20 20");
closeIcon.setAttribute("stroke-width", "1.5");
closeIcon.setAttribute("stroke", "currentColor");
closeIconPath.setAttribute("stroke-linecap", "round");
closeIconPath.setAttribute("stroke-linejoin", "round");
closeIconPath.setAttribute("d", "M6 18L18 6M6 6l12 12");

closeIcon.appendChild(closeIconPath);

// closeIcon.innerHTML = '<use xlink:href="#icon-close"></use>';
chatbotHeader.appendChild(closeIcon);

// Create the chatbot message window
const messageWindow = document.createElement("div");
messageWindow.classList.add("chatbot__message-window");

const messagesList = document.createElement("ul");
messagesList.classList.add("chatbot__messages");

const initialMessage = document.createElement("li");
initialMessage.classList.add("is-ai", "animation");

const profilePicture = document.createElement("div");
profilePicture.classList.add("is-ai__profile-picture");

// svg avatar icons
const avatarIcon = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "svg"
);
avatarIcon.classList.add("icon-avatar");
const avatarIconPath = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "path"
);
avatarIcon.setAttribute("fill", "none");
avatarIcon.setAttribute("viewBox", "0 0 32 32");
avatarIcon.setAttribute("stroke-width", "1.5");
avatarIcon.setAttribute("stroke", "currentColor");
avatarIconPath.setAttribute("stroke-linecap", "round");
avatarIconPath.setAttribute("stroke-linejoin", "round");
avatarIconPath.setAttribute(
  "d",
  "M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
);
avatarIcon.appendChild(avatarIconPath);
// avatarIcon.innerHTML = '<use xlink:href="#avatar"></use>';
profilePicture.appendChild(avatarIcon);

initialMessage.appendChild(profilePicture);

const arrow = document.createElement("span");
arrow.classList.add("chatbot__arrow", "chatbot__arrow--left");
initialMessage.appendChild(arrow);

const message = document.createElement("p");
message.classList.add("chatbot__message");
message.innerText =
  "Hi there 🖐. I’m ChatGPT, your virtual assistant. I'm here to help with your general enquiries.";
initialMessage.appendChild(message);

messagesList.appendChild(initialMessage);
messageWindow.appendChild(messagesList);

// Create the chatbot input
const chatbotInput = document.createElement("div");
chatbotInput.classList.add("chatbot__entry", "chatbot--closed");

const input = document.createElement("input");
input.setAttribute("type", "text");
input.classList.add("chatbot__input");
input.setAttribute("placeholder", "Write a message...");
chatbotInput.appendChild(input);
// send icon svg
const sendIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
sendIcon.classList.add("chatbot__submit");
const sendIconPath = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "path"
);
sendIcon.setAttribute("fill", "none");
sendIcon.setAttribute("viewBox", "0 0 32 32");
sendIcon.setAttribute("stroke-width", "1.5");
sendIcon.setAttribute("stroke", "currentColor");
sendIconPath.setAttribute("stroke-linecap", "round");
sendIconPath.setAttribute("stroke-linejoin", "round");
sendIconPath.setAttribute(
  "d",
  "M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
);
sendIcon.appendChild(sendIconPath);
chatbotInput.appendChild(sendIcon);

// Append everything to the chatbot container
chatbotContainer.appendChild(chatbotHeader);
chatbotContainer.appendChild(messageWindow);
chatbotContainer.appendChild(chatbotInput);

// Append the chatbot container to the body
document.querySelector("body").appendChild(chatbotContainer);

/* ---- Functional javaScript---- */
const accessToken = "3796899bd37c423bad3a21a25277bce0";
// const baseUrl = "https://api.api.ai/api/query?v=2015091001";
const baseUrl = "http://localhost:8080/api/v1/hello";
const sessionId = "20150910";
const loader = `<span class='loader'><span class='loader__dot'></span><span class='loader__dot'></span><span class='loader__dot'></span></span>`;
const errorMessage =
  "My apologies, I'm not avail at the moment, however, feel free to call out support team";
const urlPattern =
  /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
const $document = document;
const $chatbot = $document.querySelector(".chatbot");
const $chatbotMessageWindow = $document.querySelector(
  ".chatbot__message-window"
);
const $chatbotHeader = $document.querySelector(".chatbot__header");
const $chatbotMessages = $document.querySelector(".chatbot__messages");
const $chatbotInput = $document.querySelector(".chatbot__input");
const $chatbotSubmit = $document.querySelector(".chatbot__submit");

const botLoadingDelay = 1000;
const botReplyDelay = 2000;

document.addEventListener(
  "keypress",
  (event) => {
    if (event.which == 13) validateMessage();
  },
  false
);

$chatbotHeader.addEventListener(
  "click",
  () => {
    toggle($chatbot, "chatbot--closed");
    $chatbotInput.focus();
  },
  false
);

$chatbotSubmit.addEventListener(
  "click",
  () => {
    validateMessage();
  },
  false
);

const toggle = (element, klass) => {
  const classes = element.className.match(/\S+/g) || [],
    index = classes.indexOf(klass);
  index >= 0 ? classes.splice(index, 1) : classes.push(klass);
  element.className = classes.join(" ");
};

const userMessage = (content) => {
  $chatbotMessages.innerHTML += `<li class='is-user animation'>
      <p class='chatbot__message'>
        ${content}
      </p>
      <span class='chatbot__arrow chatbot__arrow--right'></span>
    </li>`;
};

const aiMessage = (content, isLoading = false, delay = 0) => {
  setTimeout(() => {
    removeLoader();
    $chatbotMessages.innerHTML += `<li 
      class='is-ai animation' 
      id='${isLoading ? "is-loading" : ""}'>
        <div class="is-ai__profile-picture">
          <svg class="icon-avatar" viewBox="0 0 32 32">
            <use xlink:href="#avatar" />
          </svg>
        </div>
        <span class='chatbot__arrow chatbot__arrow--left'></span>
        <div class='chatbot__message'>${content}</div>
      </li>`;
    scrollDown();
  }, delay);
};

const removeLoader = () => {
  let loadingElem = document.getElementById("is-loading");
  if (loadingElem) $chatbotMessages.removeChild(loadingElem);
};

const escapeScript = (unsafe) => {
  const safeString = unsafe
    .replace(/</g, " ")
    .replace(/>/g, " ")
    .replace(/&/g, " ")
    .replace(/"/g, " ")
    .replace(/\\/, " ")
    .replace(/\s+/g, " ");
  return safeString.trim();
};

const linkify = (inputText) => {
  return inputText.replace(urlPattern, `<a href='$1' target='_blank'>$1</a>`);
};

const validateMessage = () => {
  const text = $chatbotInput.value;
  const safeText = text ? escapeScript(text) : "";
  if (safeText.length && safeText !== " ") {
    resetInputField();
    userMessage(safeText);
    send(safeText);
  }
  scrollDown();
  return;
};

const multiChoiceAnswer = (text) => {
  const decodedText = text.replace(/zzz/g, "'");
  userMessage(decodedText);
  send(decodedText);
  scrollDown();
  return;
};

const processResponse = (val) => {
  if (val && val.fulfillment) {
    let output = "";
    let messagesLength = val.fulfillment.messages.length;

    for (let i = 0; i < messagesLength; i++) {
      if (window.CP.shouldStopExecution(0)) break;
      let message = val.fulfillment.messages[i];
      let type = message.type;

      switch (type) {
        // 0 fulfillment is text
        case 0:
          let parsedText = linkify(message.speech);
          output += `<p>${parsedText}</p>`;
          break;

        // 1 fulfillment is card
        case 1:
          let imageUrl = message.imageUrl;
          let imageTitle = message.title;
          let imageSubtitle = message.subtitle;
          let button = message.buttons[0];

          if (!imageUrl && !button && !imageTitle && !imageSubtitle) break;

          output += `
            <a class='card' href='${button.postback}' target='_blank'>
              <img src='${imageUrl}' alt='${imageTitle}' />
            <div class='card-content'>
              <h4 class='card-title'>${imageTitle}</h4>
              <p class='card-title'>${imageSubtitle}</p>
              <span class='card-button'>${button.text}</span>
            </div>
            </a>
          `;
          break;

        // 2 fulfillment is a quick reply with multi-choice buttons
        case 2:
          let title = message.title;
          let replies = message.replies;
          let repliesLength = replies.length;
          output += `<p>${title}</p>`;

          for (let i = 0; i < repliesLength; i++) {
            if (window.CP.shouldStopExecution(1)) break;
            let reply = replies[i];
            let encodedText = reply.replace(/'/g, "zzz");
            output += `<button onclick='multiChoiceAnswer("${encodedText}")'>${reply}</button>`;
          }
          window.CP.exitedLoop(1);
          break;
      }
    }
    window.CP.exitedLoop(0);

    removeLoader();
    return output;
  }

  removeLoader();
  return `<p>${errorMessage}</p>`;
};

const setResponse = (val, delay = 0) => {
  setTimeout(() => {
    // aiMessage(processResponse(val));
    aiMessage(val);
  }, delay);
};

const resetInputField = () => {
  $chatbotInput.value = "";
};

const scrollDown = () => {
  const distanceToScroll =
    $chatbotMessageWindow.scrollHeight -
    ($chatbotMessages.lastChild.offsetHeight + 60);
  $chatbotMessageWindow.scrollTop = distanceToScroll;
  return false;
};

const send = (prompt = {}) => {
  // `${baseUrl}&query=${text}&lang=en&sessionId=${sessionId}`
  fetch(`${baseUrl}`, {
    method: "POST",
    dataType: "json",
    headers: {
      // Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({ prompt }),
  })
    .then((response) => response.json())
    .then((res) => {
      if (res.status < 200 || res.status >= 300) {
        let error = new Error(res.statusText);
        throw error;
      }
      return res;
    })
    .then((res) => {
      setResponse(res.message, botLoadingDelay + botReplyDelay);
    })
    .catch((error) => {
      setResponse(errorMessage, botLoadingDelay + botReplyDelay);
      resetInputField();
      console.log(error);
    });

  aiMessage(loader, true, botLoadingDelay);
};
/* ---- End ---- */
