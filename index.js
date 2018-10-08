const textarea = document.querySelector('.chat-input textarea')
//const textarea = document.getElementById('messageField');
const sendButton = document.querySelector('button.send')
const chatMessages = document.querySelector('.chat-messages')

function scrollContainerToBottom () {
  const bottomPosition =  chatMessages.scrollHeight - chatMessages.clientHeight  
  chatMessages.scrollTop = bottomPosition
}

function addMessage () {
  const bottomPosition =  chatMessages.scrollHeight - chatMessages.clientHeight
  const containerIsOnBottom = chatMessages.scrollTop === bottomPosition
  const newChatMessage = document.createElement('div')
  newChatMessage.classList.add('chat-message')
  newChatMessage.textContent = textarea.value
  
  chatMessages.appendChild(newChatMessage)
  textarea.value = ''
  

  
  if (containerIsOnBottom) {
    scrollContainerToBottom()
  } else {
    // Show tooltip e.g. "There are {num} new messages!"
  }
}

console.log(textarea);
if (typeof textarea.addEventListener != "undefined") {
    textarea.addEventListener("keyup", event => {
        if (event.keyCode !== 13) return;
        addMessage()
    }, false);
} else if (typeof textarea.attachEvent != "undefined") { //incase you support IE8
    textarea.attachEvent("onkeyup", event => {
        if (event.keyCode !== 13) return;
        addMessage()
    });
}

sendButton.addEventListener('click', addMessage)

scrollContainerToBottom()