export interface Message {
  id: string
  content: string
  role: 'user' | 'assistant'
  timestamp: number
}

export interface ChatSession {
  id: string
  messages: Message[]
  createdAt: number
  updatedAt: number
  userId?: string
  userEmail?: string
  resolved: boolean
}

export interface ChatWidget {
  id: string
  name: string
  welcomeMessage: string
  primaryColor: string
  position: 'bottom-right' | 'bottom-left'
  enabled: boolean
  aiModel: string
  systemPrompt: string
  createdAt: number
  updatedAt: number
}

export interface AIConfig {
  model: string
  temperature: number
  maxTokens: number
  systemPrompt: string
}

export interface WidgetSettings {
  widget: ChatWidget
  aiConfig: AIConfig
}
