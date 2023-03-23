# chatbot

Chatbot MVP

- [ ] Testing on the site:
- [ ] const customLink = document.createElement('link');

```
customLink.setAttribute('rel', "stylesheet")

customLink.setAttribute('href', "https://cdn.jsdelivr.net/gh/w3tsa/chatbot-test/chatbot.css")

document.querySelector('head').appendChild(customLink);

<link rel=​"stylesheet" href=​"https:​/​/​cdn.jsdelivr.net/​gh/​w3tsa/​chatbot-test/​chatbot.css">​
const customScript = document.createElement('script');

customScript.setAttribute('src', "https://cdn.jsdelivr.net/gh/w3tsa/chatbot-test/chatbot.js");

customScript.setAttribute('defer');
VM1402:1 Uncaught TypeError: Failed to execute 'setAttribute' on 'Element': 2 arguments required, but only 1 present.
at <anonymous>:1:14
(anonymous) @ VM1402:1
customScript.setAttribute('defer', true);

document.querySelector('head').appendChild(customScript);

<script src=​"https:​/​/​cdn.jsdelivr.net/​gh/​w3tsa/​chatbot-test/​chatbot.js" defer=​"true">​</script>​

```
