'use client'

import React, { useState } from 'react'
import { ChatInterface } from '@/components/chat/ChatInterface'

interface ChatWidgetProps {
  widgetId: string
  welcomeMessage?: string
  primaryColor?: string
  position?: 'bottom-right' | 'bottom-left'
}

const ChatWidget: React.FC<ChatWidgetProps> = ({
  widgetId,
  welcomeMessage = "Hello! How can I help you today?",
  primaryColor = "#3B82F6",
  position = 'bottom-right'
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const positionClasses = {
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4'
  }

  return (
    <div className={`fixed ${positionClasses[position]} z-50`}>
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 h-96 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
          <ChatInterface
            widgetId={widgetId}
            initialMessage={welcomeMessage}
            primaryColor={primaryColor}
          />
        </div>
      )}

      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
        style={{ backgroundColor: primaryColor }}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          // Close icon (X)
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Chat icon
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.959 8.959 0 01-4.906-1.456L3 21l2.544-5.094A8.959 8.959 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
          </svg>
        )}
      </button>
    </div>
  )
}

export { ChatWidget }
