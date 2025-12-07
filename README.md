# Movie App

A React application that allows users to browse movies, search for specific titles, and manage their favorite movies. Built with Vite and React.

## Repository

🔗 [GitHub Repository](https://github.com/Joshuakaranja/deploy)

## Features

- Browse popular movies from TMDB API
- Search functionality for movies
- Add/Remove movies to favorites
- Responsive design with CSS
- Real-time movie data updates

## Technologies Used

- React
- React Router for navigation
- Context API for state management
- TMDB API for movie data
- CSS for styling
- Vite for development

## Project Structure

```
src/
├── components/
│   ├── MovieCard.jsx
│   └── NavBar.jsx
├── contexts/
│   └── MovieContext.jsx
├── css/
│   ├── App.css
│   ├── Favorites.css
│   ├── Home.css
│   ├── MovieCard.css
│   ├── Navbar.css
│   └── index.css
├── pages/
│   ├── Favorites.jsx
│   └── Home.jsx
├── services/
│   └── Api.js
├── App.jsx
└── main.jsx
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open http://localhost:5173 in your browser

## API Integration

This project uses the TMDB (The Movie Database) API to fetch movie data. The API key is configured in `services/Api.js`.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
# Josh-box
# Josh-box
