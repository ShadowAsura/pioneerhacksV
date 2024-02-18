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

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signup-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Collect form data
        const formData = {
            email: document.getElementById('email').value,
            planDuration: document.getElementById('password').value,
            budget: document.getElementById('name').value,
            healthIssues: document.getElementById('weight').value,
            comments: document.getElementById('age').value
        };

        // Send the form data to the server using fetch API
        fetch('YOUR_API_ENDPOINT', { // Replace YOUR_API_ENDPOINT with your actual endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            window.location.href = './main1.html'; // Redirect after successful submission
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});

