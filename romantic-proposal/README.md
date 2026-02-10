# 💖 Romantic Proposal App

A beautiful, animated React web app designed for a romantic proposal with colorful backgrounds, flowers, fireworks, and love quotes.

## ✨ Features

- 🌈 Animated gradient background with vibrant colors
- 🌸 Falling flower animations
- 🎆 Firework effects
- ❤️ Floating hearts
- 💕 Beautiful proposal message
- 📜 Rotating love quotes (changes every 4 seconds)
- 💝 Yes/No response buttons
- 📱 WhatsApp integration to send responses

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Configuration

Update your WhatsApp number in `src/components/ResponseButtons.jsx`:

```javascript
const phoneNumber = '254718864578'; // Replace with your number
```

### Run the App

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📁 Project Structure

```
src/
├── components/
│   ├── AnimatedBackground.jsx  # Flowers, fireworks, hearts animations
│   ├── ProposalMessage.jsx     # Main proposal text
│   ├── LoveQuotes.jsx          # Rotating love quotes
│   └── ResponseButtons.jsx     # Yes/No buttons with WhatsApp
├── App.jsx                     # Main app container
├── App.css                     # Styles and animations
└── main.jsx                    # Entry point
```

## 🎨 Customization

- **Proposal Message**: Edit `src/components/ProposalMessage.jsx`
- **Love Quotes**: Modify the quotes array in `src/components/LoveQuotes.jsx`
- **Colors**: Adjust gradient colors in `src/App.css`
- **Animations**: Customize timing and effects in `src/App.css`

## 🛠️ Built With

- React 18
- Vite
- CSS3 Animations

## 💌 Good Luck!

May your proposal be as beautiful as this app! 💖
