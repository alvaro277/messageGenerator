const messageButton = document.getElementById('generator');
const message = document.getElementById('message');

messageButton.addEventListener('click', () => message.innerText(formatMessage(generateMessage())));
