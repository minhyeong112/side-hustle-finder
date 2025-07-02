# Side Hustle Finder 🚀

An interactive web application that helps you discover the perfect side hustle based on your skills, interests, and availability. Get personalized recommendations and start your entrepreneurial journey today!

## 🌟 Features

- **Personalized Recommendations**: Answer a series of questions about your skills, interests, and availability
- **Smart Matching Algorithm**: Get side hustle suggestions tailored to your unique profile
- **Detailed Information**: Learn about difficulty levels, potential income, and requirements for each opportunity
- **Beautiful UI**: Modern, responsive design with smooth animations and intuitive interface
- **Share Results**: Easily share your recommendations with friends or save for later

## 🛠️ Built With

- [React](https://reactjs.org/) - UI framework
- [Vite](https://vitejs.dev/) - Build tool and development server
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable component library
- [Lucide React](https://lucide.dev/) - Beautiful icons

## 🚀 Local Development

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/side-hustle-finder.git
cd side-hustle-finder
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 📦 Building for Production

To create a production build:

```bash
npm run build
```

This will generate optimized files in the `dist` directory.

## 🌐 Deploying to GitHub Pages

This project includes automatic deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment (Recommended)

1. **Enable GitHub Pages in your repository:**
   - Go to Settings → Pages
   - Under "Build and deployment", select "GitHub Actions" as the source

2. **Push to main branch:**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

3. **Wait for deployment:**
   - The GitHub Action will automatically build and deploy your site
   - Check the Actions tab in your repository to monitor progress
   - Your site will be available at: `https://YOUR_USERNAME.github.io/side-hustle-finder/`

### Manual Deployment

If you prefer to deploy manually:

```bash
# Build the project
npm run build

# Install gh-pages package (one-time)
npm install --save-dev gh-pages

# Add deployment script to package.json
# "deploy": "gh-pages -d dist"

# Deploy to GitHub Pages
npm run deploy
```

## 🔧 Configuration

### Vite Configuration

The project is configured to work with GitHub Pages. The `vite.config.js` includes:

```javascript
base: '/side-hustle-finder/'
```

**IMPORTANT**: Update this to match your repository name. For example:
- If your repo is `https://github.com/minhyeong112/side-hustle-finder`, use `base: '/side-hustle-finder/'`
- If your repo is `https://github.com/minhyeong112/my-app`, use `base: '/my-app/'`

### Environment Variables

No environment variables are required for basic functionality.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- UI components inspired by [shadcn/ui](https://ui.shadcn.com/)
- Built with [Vite](https://vitejs.dev/) and [React](https://reactjs.org/)

## 📧 Contact

Questions or suggestions? Feel free to open an issue or contact the maintainers.

---

Made with ❤️ by [Your Name]
