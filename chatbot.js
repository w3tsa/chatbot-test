// Create the chatbot container
const chatbotContainer = document.createElement("div");
chatbotContainer.classList.add("chatbot", "chatbot--closed");

// Create the chatbot header
const chatbotHeader = document.createElement("div");
chatbotHeader.classList.add("chatbot__header");

const headerText = document.createElement("p");
headerText.innerHTML =
  '<strong>Got a question?</strong> <span class="u-text-highlight">Ask Rahim</span>';
chatbotHeader.appendChild(headerText);

const closeSpeechIcon = document.createElement("svg");
closeSpeechIcon.classList.add("chatbot__close-button", "icon-speech");
closeSpeechIcon.setAttribute("viewBox", "0 0 32 32");
closeSpeechIcon.innerHTML = '<use xlink:href="#icon-speech"></use>';
chatbotHeader.appendChild(closeSpeechIcon);

const closeIcon = document.createElement("svg");
closeIcon.classList.add("chatbot__close-button", "icon-close");
closeIcon.setAttribute("viewBox", "0 0 32 32");
closeIcon.innerHTML = '<use xlink:href="#icon-close"></use>';
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

const avatarIcon = document.createElement("svg");
avatarIcon.classList.add("icon-avatar");
avatarIcon.setAttribute("viewBox", "0 0 32 32");
avatarIcon.innerHTML = '<use xlink:href="#avatar"></use>';
profilePicture.appendChild(avatarIcon);

initialMessage.appendChild(profilePicture);

const arrow = document.createElement("span");
arrow.classList.add("chatbot__arrow", "chatbot__arrow--left");
initialMessage.appendChild(arrow);

const message = document.createElement("p");
message.classList.add("chatbot__message");
message.innerText =
  "Hi there 🖐. I’m Rahim, your virtual assistant. I'm here to help with your general enquiries.";
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

const sendIcon = document.createElement("svg");
sendIcon.classList.add("chatbot__submit");
sendIcon.setAttribute("viewBox", "0 0 32 32");
sendIcon.innerHTML = '<use xlink:href="#icon-send"></use>';
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
