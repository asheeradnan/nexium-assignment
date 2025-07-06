# 🌟 Quote Explorer

A beautiful, modern web application for discovering inspiring quotes on various topics. Built with Next.js 15, TypeScript, and Tailwind CSS.

## ✨ Features

- **Modern UI Design**: Contemporary glassmorphism effects with gradient backgrounds
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Search**: Search quotes by topics like motivation, life, success, wisdom, and dreams
- **Smooth Animations**: Fade-in animations and hover effects for better user experience
- **Dark Mode Support**: Built-in support for light and dark themes
- **Accessibility**: Proper ARIA labels and keyboard navigation

## 🚀 Live Demo

**[View Live Demo](https://assignment-1-evdrgfyxq-asheeradnan-gmailcoms-projects.vercel.app)**

## 🛠️ Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **Vercel** - Deployment platform

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd assignment-1
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build & Deploy

### Local Build
```bash
npm run build
npm start
```

### Deploy to Vercel
```bash
npx vercel --prod
```

### Deploy to Netlify
```bash
npm run build
# Upload the `.next` folder to Netlify
```

## 📁 Project Structure

```
assignment-1/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── quote/
│   │   │   └── QuoteForm.tsx
│   │   └── ui/
│   │       ├── button.tsx
│   │       └── input.tsx
│   ├── data/
│   │   └── quotes.ts
│   └── lib/
│       └── utils.ts
├── public/
│   └── [static assets]
├── package.json
└── README.md
```

## 🎨 UI/UX Features

- **Glassmorphism Effects**: Semi-transparent cards with backdrop blur
- **Gradient Backgrounds**: Beautiful multi-layered gradients
- **Micro-interactions**: Hover effects and smooth transitions
- **Typography**: Modern font hierarchy with gradient text
- **Color Scheme**: Professional blue/purple theme with proper contrast
- **Spacing**: Consistent spacing using Tailwind's design system

## 📱 Responsive Design

The application is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1440px+)

## 🔍 Available Topics

- **Motivation** - Inspiring quotes to boost your drive
- **Life** - Wisdom about life and living
- **Success** - Quotes about achieving goals
- **Wisdom** - Thoughtful insights and knowledge
- **Dreams** - Encouragement for pursuing aspirations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Fonts by [Google Fonts](https://fonts.google.com/)
- Deployed on [Vercel](https://nexium-assignment.vercel.app/)

---

Made with ❤️ by Asheer Adnan
