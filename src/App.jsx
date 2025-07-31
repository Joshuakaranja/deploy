// import MovieCard from "./components/MovieCard"
import "./App.css";
import Favorites from "./pages/Favorites"
import Home from "./pages/Home"
import {Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar"
import { MovieProvider } from "./context/MovieContext";
function App() {
  return (
    <MovieProvider>
      <NavBar/>
      <main className="main-content">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/favorites" element={<Favorites/>}/>

    </Routes>
   </main>
   </MovieProvider>
   )  
}


export default App
//  {/* {movieNumber === 2 ?(   
//        <MovieCard movie={{title: " josh's film" , release_date:"2024" }}/>) :(
//         <MovieCard movie={{title: " Isaacs film" , release_date:"2020" }}/> */}{/* )} */}// const movieNumber = 1;