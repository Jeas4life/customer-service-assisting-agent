import React, { useState, useRef, useEffect } from 'react'
import { Message } from '@/lib/types'
import { generateId } from '@/lib/utils'
import { MessageBubble } from './MessageBubble'
import { Button } from '@/components/ui/button'

interface ChatInterfaceProps {
  widgetId: string
  initialMessage?: string
  primaryColor?: string
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ 
  widgetId, 
  initialMessage = "Hello! How can I help you today?",
  primaryColor = "#3B82F6"
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: generateId(),
      content: initialMessage,
      role: 'assistant',
      timestamp: Date.now()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return

    const userMessage: Message = {
      id: generateId(),
      content: inputValue.trim(),
      role: 'user',
      timestamp: Date.now()
    }

    setMessages((prev: Message[]) => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage.content,
          widgetId,
          sessionId: 'session_' + generateId()
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      const data = await response.json()
      
      const assistantMessage: Message = {
        id: generateId(),
        content: data.message || "I apologize, but I'm having trouble responding right now. Please try again.",
        role: 'assistant',
        timestamp: Date.now()
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error sending message:', error)
      const errorMessage: Message = {
        id: generateId(),
        content: "I apologize, but I'm having trouble responding right now. Please try again.",
        role: 'assistant',
        timestamp: Date.now()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div 
        className="px-4 py-3 text-white font-medium"
        style={{ backgroundColor: primaryColor }}
      >
        <h3 className="text-lg">Customer Support</h3>
        <p className="text-sm opacity-90">We're here to help!</p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-[80%]">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-gray-200 p-4">
        <div className="flex space-x-2">
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 resize-none border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={1}
            disabled={isLoading}
          />
          <Button
            onClick={sendMessage}
            disabled={!inputValue.trim() || isLoading}
            className="shrink-0"
            style={{ backgroundColor: primaryColor }}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  )
}

export { ChatInterface }
