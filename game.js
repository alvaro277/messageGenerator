const messageButton = document.getElementById('generator');
const message = document.getElementById('message');

messageButton.addEventListener('click', function messageGen(){
  const arrayMessage = generateMessage(); 
  message.innerText(formatMessage(arrayMessage));
}
    
                              );
