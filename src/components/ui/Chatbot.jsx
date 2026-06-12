import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Trash2, Sparkles, Loader2 } from 'lucide-react';
import { useStore } from '../../context/StoreContext';

const QUICK_REPLIES = [
  "What are the pricing plans?",
  "How do I set up my store?",
  "Can I use my own domain?",
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  
  // Try to get theme settings from StoreContext to match Cartify theme
  let primaryColor = '#00DC82'; // fallback Emerald
  try {
    const { settings } = useStore();
    if (settings && settings.themeColor) {
      primaryColor = settings.themeColor;
    }
  } catch (e) {
    // If not wrapped in StoreProvider, ignore
  }

  // Initialize with welcome message from session storage or create new
  useEffect(() => {
    const savedChat = sessionStorage.getItem('cartify_ai_chat');
    if (savedChat) {
      setMessages(JSON.parse(savedChat));
    } else {
      setMessages([
        { id: '1', role: 'ai', text: "Hi! I'm the Cartify AI assistant. How can I help you today? ✨" }
      ]);
    }
  }, []);

  // Save to session storage whenever messages change
  useEffect(() => {
    sessionStorage.setItem('cartify_ai_chat', JSON.stringify(messages));
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClearChat = () => {
    const defaultMessage = [{ id: Date.now().toString(), role: 'ai', text: "Hi! I'm the Cartify AI assistant. How can I help you today? ✨" }];
    setMessages(defaultMessage);
    sessionStorage.setItem('cartify_ai_chat', JSON.stringify(defaultMessage));
  };

  const handleSend = async (textToSend) => {
    if (!textToSend.trim()) return;

    const userMessage = { id: Date.now().toString(), role: 'user', text: textToSend };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Build history payload (excluding the new user message and formatting for API)
      const history = messages.map(msg => ({
        role: msg.role === 'ai' ? 'model' : 'user',
        text: msg.text
      }));

      const response = await fetch('http://localhost:3001/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: textToSend, history })
      });

      const data = await response.json();
      
      if (response.ok && data.reply) {
        setMessages(prev => [...prev, { id: Date.now().toString(), role: 'ai', text: data.reply }]);
      } else {
        throw new Error(data.error || "Failed to get response");
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { 
        id: Date.now().toString(), 
        role: 'ai', 
        text: "I'm having trouble connecting right now. Please try again later. 😔" 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend(input);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: isOpen ? 0 : 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-4 rounded-full shadow-lg shadow-black/10 z-50 text-dark flex items-center justify-center transition-colors"
        style={{ backgroundColor: primaryColor }}
      >
        <MessageSquare size={24} className={primaryColor === '#000000' ? 'text-white' : 'text-slate-900'} />
      </motion.button>

      {/* Chat Window Container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, type: 'spring', stiffness: 250, damping: 25 }}
            className="fixed bottom-6 right-6 w-[350px] sm:w-[400px] h-[600px] max-h-[85vh] bg-white dark:bg-dark-surface rounded-2xl shadow-2xl border border-gray-200 dark:border-dark-border flex flex-col overflow-hidden z-50"
          >
            {/* Header */}
            <div 
              className="px-4 py-3 flex items-center justify-between shadow-sm relative z-10"
              style={{ backgroundColor: primaryColor }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <Sparkles size={16} className={primaryColor === '#000000' ? 'text-white' : 'text-slate-900'} />
                </div>
                <div>
                  <h3 className={`font-bold text-sm ${primaryColor === '#000000' ? 'text-white' : 'text-slate-900'}`}>Cartify AI</h3>
                  <p className={`text-[10px] opacity-80 ${primaryColor === '#000000' ? 'text-white' : 'text-slate-900'}`}>Always here to help</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button 
                  onClick={handleClearChat}
                  title="Clear Chat"
                  className={`p-1.5 rounded-lg hover:bg-white/20 transition-colors ${primaryColor === '#000000' ? 'text-white' : 'text-slate-900'}`}
                >
                  <Trash2 size={16} />
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className={`p-1.5 rounded-lg hover:bg-white/20 transition-colors ${primaryColor === '#000000' ? 'text-white' : 'text-slate-900'}`}
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-dark scroll-smooth">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div 
                      className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1
                        ${msg.role === 'user' 
                          ? 'bg-slate-200 dark:bg-slate-700' 
                          : 'bg-primary/10'}`}
                    >
                      {msg.role === 'user' ? (
                        <User size={12} className="text-slate-600 dark:text-slate-300" />
                      ) : (
                        <Bot size={12} className="text-primary" />
                      )}
                    </div>
                    <div 
                      className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed
                        ${msg.role === 'user' 
                          ? 'bg-slate-800 text-white rounded-tr-sm dark:bg-slate-100 dark:text-slate-900' 
                          : 'bg-white border border-gray-100 dark:border-dark-border dark:bg-dark-card text-slate-800 dark:text-slate-200 rounded-tl-sm shadow-sm'}`}
                    >
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-2 max-w-[85%]">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <Bot size={12} className="text-primary" />
                    </div>
                    <div className="px-4 py-3 rounded-2xl rounded-tl-sm bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border shadow-sm flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && !isLoading && (
              <div className="px-4 py-2 bg-slate-50 dark:bg-dark flex gap-2 overflow-x-auto scrollbar-hide pb-2">
                {QUICK_REPLIES.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleSend(reply)}
                    className="whitespace-nowrap px-3 py-1.5 rounded-full border border-primary/20 text-primary text-xs font-medium hover:bg-primary/5 transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}

            {/* Input Area */}
            <div className="p-3 bg-white dark:bg-dark-surface border-t border-gray-200 dark:border-dark-border">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a message..."
                  disabled={isLoading}
                  className="w-full pl-4 pr-12 py-3 rounded-xl bg-slate-100 dark:bg-dark-card border border-transparent focus:border-primary/50 focus:bg-white dark:focus:bg-dark text-sm outline-none transition-all disabled:opacity-50 text-slate-800 dark:text-slate-100"
                />
                <button
                  onClick={() => handleSend(input)}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 p-1.5 rounded-lg bg-primary text-dark disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
                >
                  {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
