# 💖 Interactive Love Card

A beautiful, romantic interactive love card built with React and TypeScript. Perfect for sending special messages to your loved ones!

## ✨ Features

- 💕 **Romantic Design**: Soft pink aesthetic with beautiful gradients and animations
- 📱 **Responsive**: Optimized for both desktop and mobile devices
- 💌 **Interactive Modal**: Persistent "Yes/No" dialog that loops until "Yes" is clicked
- 🎉 **Animations**: Heart animations, confetti effects, and smooth transitions
- 📸 **Photo Support**: Placeholder for adding personal photos
- 🎨 **Customizable**: Easy to customize messages, colors, and content

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd love-card
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🎨 Customization

### Adding Your Photo
Replace the empty `photoUrl` prop in `src/App.tsx`:
```tsx
<Card 
  photoUrl="path/to/your/photo.jpg"
  photoAlt="Your special moment"
/>
```

### Customizing Messages
Edit the props in `src/App.tsx`:
```tsx
<Card 
  title="Your Custom Title 💖"
  question="Your special question?"
  confirmationMessage="Your sweet response! ❤️"
/>
```

### Customizing Colors
Modify the CSS variables in `src/components/Card.css` and `src/components/Modal.css` to change the color scheme.

## 🚀 Deployment

### GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
{
  "homepage": "https://yourusername.github.io/love-card",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

### Netlify

1. Build the project:
```bash
npm run build
```

2. Drag the `build` folder to [netlify.com/drop](https://netlify.com/drop)

### Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel --prod
```

## 🎵 Adding Background Music (Optional)

To add background music, add an audio file to the `public` folder and modify the Card component:

```tsx
// Add to Card component
useEffect(() => {
  const audio = new Audio('/path-to-your-music.mp3');
  audio.loop = true;
  audio.volume = 0.3;
  // Note: Most browsers require user interaction before playing audio
  const playAudio = () => audio.play();
  document.addEventListener('click', playAudio, { once: true });
  
  return () => {
    audio.pause();
    document.removeEventListener('click', playAudio);
  };
}, []);
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Card.tsx          # Main card component
│   ├── Card.css          # Card styling
│   ├── modal.tsx         # Modal dialog component
│   └── Modal.css         # Modal styling
├── App.tsx               # Main application
└── App.css               # Global styles
```

## 🎨 Future Decoration Components

The project is designed to easily accommodate additional decorative components:

- **FloatingHearts**: Animated floating heart elements
- **ParticleSystem**: Customizable particle effects
- **MusicPlayer**: Background music controls
- **PhotoGallery**: Multiple photo carousel
- **MessageCard**: Additional message cards
- **ThemeSelector**: Multiple color theme options

## 🛠 Technologies Used

- **React 18** - UI Framework
- **TypeScript** - Type safety
- **CSS3** - Animations and styling
- **Google Fonts** - Beautiful typography
- **Create React App** - Build tool

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 💕 Contributing

Feel free to contribute by:
1. Adding new romantic themes
2. Improving animations
3. Adding more interactive features
4. Enhancing mobile experience

---

**Made with 💖 for spreading love and joy!**
