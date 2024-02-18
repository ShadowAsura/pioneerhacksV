document.getElementById('openChatBtn').addEventListener('click', function() {
    document.getElementById('chatContainer').style.display = 'block';
  });
  
  document.getElementById('closeChatBtn').addEventListener('click', function() {
    document.getElementById('chatContainer').style.display = 'none';
  });
  

  
  // Function to display messages in the chat body
  function displayMessage(sender, message) {
    var chatBody = document.getElementById('chatBody');
    var messageDiv = document.createElement('div');
    messageDiv.className = sender;
    messageDiv.textContent = message;
    chatBody.appendChild(messageDiv);
  
    // Scroll to the bottom of the chat body
    chatBody.scrollTop = chatBody.scrollHeight;
  }
// Assuming sendMessageBtn and userInput are already defined
document.getElementById('sendMessageBtn').addEventListener('click', async function() {
  const userInput = document.getElementById('userInput');
  const message = userInput.value.trim();
  if (message !== '') {
    displayMessage('user', message); // Display the user's message
    userInput.value = ''; // Clear input

    // Fetch AI response
    const response = await fetch('http://localhost:3000/getAIResponse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: message }),
    })


    if (response.ok) {
      const data = await response.json();
      displayMessage('ai', data.reply); // Display the AI's response
    } else {
      console.error('Failed to get AI response');
    }
  }
});
