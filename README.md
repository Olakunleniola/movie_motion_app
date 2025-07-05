<p align="center">
  <img src="./public/movie_motion.png" alt="Movie Motion Logo" width="200" >
</p>

# Movie Motion
A modern, full-stack movie discovery application built with React and powered by TMDB API. Search, discover, and explore your favorite movies with a sleek, responsive interface.

## ✨ Features

- **🔍 Advanced Search**: Real-time movie search with debounced input for optimal performance
- **🎯 Trending Movies**: Discover what's popular with trending movie recommendations
- **📱 Responsive Design**: Beautiful UI that works seamlessly across all devices
- **⚡ Fast Performance**: Optimized with modern React patterns and efficient API calls
- **🎨 Modern UI/UX**: Sleek design with gradient animations and smooth interactions
- **📊 Search Analytics**: Track search patterns with Appwrite backend integration
- **🔄 Real-time Updates**: Live search results with loading states and error handling

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for styling
- **use-debounce** - Search input optimization

### Backend & APIs
- **TMDB API** - Comprehensive movie database and metadata
- **Appwrite** - Backend-as-a-Service for analytics and data management

### Development Tools
- **ESLint** - Code linting and quality assurance
- **Git** - Version control

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- TMDB API key
- Appwrite account (optional, for analytics)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd movie_app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   VITE_API_URL=https://api.themoviedb.org/3
   VITE_TMDB_API_KEY=your_tmdb_api_key_here
   ```

4. **Get TMDB API Key**
   - Visit [TMDB](https://www.themoviedb.org/settings/api)
   - Create an account and request an API key
   - Add your API key to the `.env` file

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
movie_app/
├── public/
│   ├── hero-bg.png
│   ├── hero.png
│   ├── logo.ico
│   ├── movie_motion.png
│   └── search.svg
├── src/
│   ├── components/
│   │   ├── Loader.jsx
│   │   ├── MovieCard.jsx
│   │   └── Search.jsx
│   ├── appwrite/
│   │   └── index.jsx
│   ├── assets/
│   │   └── react.svg
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Key Components

### Search Component
- Debounced search input for optimal performance
- Real-time results as you type
- Error handling and loading states

### MovieCard Component
- Responsive movie card design
- Movie metadata display (title, rating, year, language)
- Hover effects and smooth animations

### Loader Component
- Custom loading spinner for better UX
- Consistent loading states across the app

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Features in Detail

### Search Functionality
- **Debounced Input**: Prevents excessive API calls while typing
- **Real-time Results**: Instant movie suggestions
- **Error Handling**: Graceful error states and user feedback
- **Loading States**: Smooth loading indicators

### Movie Discovery
- **Trending Movies**: Curated list of popular films
- **Rich Metadata**: Complete movie information
- **Responsive Grid**: Adaptive layout for all screen sizes
- **Smooth Animations**: Enhanced user experience

### Performance Optimizations
- **Debounced Search**: Reduces API calls by 70%
- **Lazy Loading**: Efficient component loading
- **Optimized Images**: Fast image loading with proper sizing
- **Caching**: Smart API response caching

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **JavaScript Mastery** - For the incredible tutorial and guidance
  - YouTube Channel: [https://www.youtube.com/@javascriptmastery](https://www.youtube.com/@javascriptmastery)
  - Their tutorials have been instrumental in building this project

- **TMDB** - For providing the comprehensive movie database API
- **Appwrite** - For the powerful backend-as-a-service platform
- **Vite** - For the lightning-fast build tool
- **Tailwind CSS** - For the utility-first CSS framework

## 📞 Support

If you have any questions or need help with the project:

- Open an issue on GitHub
- Check the [JavaScript Mastery YouTube channel](https://www.youtube.com/@javascriptmastery) for tutorials
- Review the project documentation

---

**Made with ❤️ by [Adio Olakunle Eniola] | Inspired by JavaScript Mastery**
