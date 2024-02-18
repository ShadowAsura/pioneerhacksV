document.getElementById('openChatBtn').addEventListener('click', function() {
    document.getElementById('chatContainer').style.display = 'block';
  });
  
  document.getElementById('closeChatBtn').addEventListener('click', function() {
    document.getElementById('chatContainer').style.display = 'none';
  });
  
  document.getElementById('sendMessageBtn').addEventListener('click', function() {
    // Get user input
    var userInput = document.getElementById('userInput').value;
  
    if (userInput.trim() !== '') {
      // Display user message in the chat body
      displayMessage('user', userInput);
  
      // Handle the AI response (you can replace this with your actual chatbot logic)
      var aiResponse = "This is a sample AI response.";
  
      // Display AI response in the chat body after a short delay (simulating AI processing time)
      setTimeout(function() {
        displayMessage('ai', aiResponse);
      }, 500);
  
      // Clear the user input field
      document.getElementById('userInput').value = '';
    }
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
  