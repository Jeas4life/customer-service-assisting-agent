// AI Customer Assistant Widget Script
// This script creates an embeddable chat widget for any website

(function() {
  'use strict';

  // Configuration from data attributes
  const script = document.currentScript;
  const widgetId = script.dataset.widgetId || 'default';
  const apiUrl = script.dataset.apiUrl || 'http://localhost:3000';
  const primaryColor = script.dataset.primaryColor || '#3B82F6';
  const position = script.dataset.position || 'bottom-right';
  const welcomeMessage = script.dataset.welcomeMessage || 'Hello! How can I help you today?';

  // Create widget container
  function createWidget() {
    const widgetContainer = document.createElement('div');
    widgetContainer.id = 'ai-customer-assistant-widget';
    widgetContainer.style.cssText = `
      position: fixed;
      ${position.includes('right') ? 'right: 20px;' : 'left: 20px;'}
      bottom: 20px;
      z-index: 9999;
      font-family: system-ui, -apple-system, sans-serif;
    `;

    // Widget HTML
    widgetContainer.innerHTML = `
      <div id="chat-window" style="
        display: none;
        width: 320px;
        height: 400px;
        background: white;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.1);
        margin-bottom: 16px;
        overflow: hidden;
        border: 1px solid #e5e7eb;
      ">
        <div id="chat-header" style="
          background: ${primaryColor};
          color: white;
          padding: 16px;
          font-weight: 600;
        ">
          <div style="font-size: 16px;">Customer Support</div>
          <div style="font-size: 12px; opacity: 0.9;">We're here to help!</div>
        </div>
        <div id="chat-messages" style="
          height: 280px;
          overflow-y: auto;
          padding: 16px;
          background: #f9fafb;
        ">
          <div class="message assistant" style="
            background: #e5e7eb;
            padding: 8px 12px;
            border-radius: 12px;
            margin-bottom: 8px;
            max-width: 80%;
            font-size: 14px;
          ">${welcomeMessage}</div>
        </div>
        <div id="chat-input-area" style="
          padding: 16px;
          border-top: 1px solid #e5e7eb;
          background: white;
        ">
          <div style="display: flex; gap: 8px;">
            <input id="chat-input" type="text" placeholder="Type your message..." style="
              flex: 1;
              padding: 8px 12px;
              border: 1px solid #d1d5db;
              border-radius: 8px;
              font-size: 14px;
              outline: none;
            ">
            <button id="send-button" style="
              background: ${primaryColor};
              color: white;
              border: none;
              padding: 8px 16px;
              border-radius: 8px;
              cursor: pointer;
              font-size: 14px;
              font-weight: 500;
            ">Send</button>
          </div>
        </div>
      </div>
      <button id="chat-toggle" style="
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background: ${primaryColor};
        color: white;
        border: none;
        cursor: pointer;
        box-shadow: 0 4px 16px rgba(0,0,0,0.15);
        font-size: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
      ">💬</button>
    `;

    document.body.appendChild(widgetContainer);
    
    // Add event listeners
    setupEventListeners();
  }

  function setupEventListeners() {
    const chatToggle = document.getElementById('chat-toggle');
    const chatWindow = document.getElementById('chat-window');
    const sendButton = document.getElementById('send-button');
    const chatInput = document.getElementById('chat-input');

    let isOpen = false;

    chatToggle.addEventListener('click', () => {
      isOpen = !isOpen;
      chatWindow.style.display = isOpen ? 'block' : 'none';
      chatToggle.innerHTML = isOpen ? '✕' : '💬';
    });

    sendButton.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });
  }

  async function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');
    const message = chatInput.value.trim();

    if (!message) return;

    // Add user message to chat
    addMessageToChat(message, 'user');
    chatInput.value = '';

    try {
      // Send to API
      const response = await fetch(`${apiUrl}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          widgetId,
          sessionId: 'session_' + Date.now()
        }),
      });

      const data = await response.json();
      
      // Add assistant response
      addMessageToChat(data.message || 'Sorry, I could not process your request.', 'assistant');
    } catch (error) {
      console.error('Chat error:', error);
      addMessageToChat('Sorry, I\'m having trouble responding right now. Please try again.', 'assistant');
    }
  }

  function addMessageToChat(message, role) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${role}`;
    
    const isUser = role === 'user';
    messageDiv.style.cssText = `
      background: ${isUser ? primaryColor : '#e5e7eb'};
      color: ${isUser ? 'white' : 'black'};
      padding: 8px 12px;
      border-radius: 12px;
      margin-bottom: 8px;
      max-width: 80%;
      font-size: 14px;
      margin-left: ${isUser ? 'auto' : '0'};
      margin-right: ${isUser ? '0' : 'auto'};
      text-align: ${isUser ? 'right' : 'left'};
    `;
    messageDiv.textContent = message;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Initialize widget when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createWidget);
  } else {
    createWidget();
  }
})();
