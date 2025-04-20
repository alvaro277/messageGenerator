const messageButton = document.getElementById('generator');
const message = document.getElementById('message');

messageButton.addEventListener('onclick', () => message.innerText(formatMessage(generateMessage())));
