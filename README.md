# chatbot

Chatbot MVP

- [x] Testing on the site:

```
const customLink = document.createElement('link');
customLink.setAttribute('rel', "stylesheet")

customLink.setAttribute('href', "https://cdn.jsdelivr.net/gh/w3tsa/chatbot-test/chatbot.css")

document.querySelector('head').appendChild(customLink);

const customScript = document.createElement('script');

customScript.setAttribute('src', "https://cdn.jsdelivr.net/gh/w3tsa/chatbot-test/chatbot.js");

customScript.setAttribute('defer', true);

document.querySelector('head').appendChild(customScript);

<link rel=​"stylesheet" href=​"https:​/​/​cdn.jsdelivr.net/​gh/​w3tsa/​chatbot-test/​chatbot.css">​
<script src=​"https:​/​/​cdn.jsdelivr.net/​gh/​w3tsa/​chatbot-test/​chatbot.js" defer=​"true">​</script>​

```
