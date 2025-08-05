# AI Customer Assistant

A modern AI-powered customer service chat widget built with Next.js 15, React 19, and OpenAI.

## 🚀 Features

- **Real-time AI Chat**: Powered by OpenAI's GPT models
- **Embeddable Widget**: Easy integration on any website
- **Admin Dashboard**: Monitor conversations and configure settings
- **Modern UI**: Built with Tailwind CSS and TypeScript
- **Mobile Responsive**: Works perfectly on all devices

## 🛠️ Tech Stack

- **Next.js 15** with App Router
- **React 19** with TypeScript
- **Tailwind CSS** for styling
- **OpenAI API** for AI responses
- **Vercel** ready for deployment

## 🎯 Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/ai-customer-assistant)

### Environment Variables

Add these in your deployment platform:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🔗 Widget Integration

Embed on any website:

```html
<script src="https://your-domain.com/widget.js"></script>
<script>
  ChatWidget.init({
    primaryColor: '#3B82F6',
    position: 'bottom-right'
  });
</script>
```

## 📱 Pages

- **`/`** - Landing page with demo
- **`/widget`** - Embeddable chat widget
- **`/admin`** - Admin dashboard
- **`/api/chat`** - Chat API endpoint

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

MIT License - see LICENSE file for details.
