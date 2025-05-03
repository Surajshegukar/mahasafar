import React, { useState, useRef, useEffect } from 'react';
import { Send, MessageSquare, X } from 'lucide-react';
import { BotMessageSquare } from 'lucide-react';
const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{
    text: "Hi there! I'm your travel assistant. How can I help you plan your next adventure?",
    sender: 'bot',
    guides: [],
  }]);

  const CHATBOT_IP = import.meta.env.VITE_CHATBOT_IP;

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [messages, isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // send bot message when user sends a message Hi 
    if(input.trim().toLowerCase() === 'hi' || input.trim().toLowerCase() === 'hello'){
      const botMessage = { text: "Hello! How can I assist you today?", sender: 'bot' };
      setMessages(prev => [...prev, botMessage]);
      return;
    }


    // Add user message
    const userMessage = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Send message to server
      const response = await fetch(CHATBOT_IP, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_input: input }),
      });

      const data = await response.json();

     
      
      // Add bot response
      const botMessage = { text: data.location, sender: 'bot', guides: data.guides };
      if (data.guides && data.guides.length > 0) {
        botMessage.text += ' Here are some guides I found for you:';
        botMessage.guides.forEach((guide, index) => {
          botMessage.text += `${index + 1}. ${guide.name} - ${guide.experience} years of experience`;
          botMessage.text += `  ${guide.rate} per hour`;
        });
        botMessage.text += 'Would you like to know more about any of these guides?';
      } else {
        botMessage.text += ' No guides found.';
      }
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = { text: 'Sorry, there was an error processing your request.', sender: 'bot' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen && messages.length === 0) {
      // Add welcome message when opening empty chat
      setMessages([{ 
        text: "Hi there! I'm your travel assistant. How can I help you plan your next adventure?", 
        sender: 'bot' 
      }]);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg bg-orange-600 hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center text-white"
        aria-label="Open chat"
      >
        <BotMessageSquare className="h-6 w-6" />
      </button>

      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 md:w-96 h-[500px] bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden border border-gray-200">
          {/* Chat Header */}
          <div className="p-4 bg-orange-500 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              <h3 className="font-medium">Travel Assistant</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {(messages).map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg shadow-sm ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-800 border border-gray-200'
                  }`}
                >
                  {message.text}
                </div>
               
           
              </div>
              

            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 p-3 rounded-lg shadow-sm border border-gray-200 max-w-[80%]">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '600ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200 bg-white">
            <div className="flex gap-2 items-center">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 py-2 px-3 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent text-black"
              />
              <button 
                type="submit" 
                disabled={isLoading || !input.trim()} 
                className={`rounded-full p-2 ${
                  !input.trim() || isLoading 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                } transition-colors`}
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatBot;