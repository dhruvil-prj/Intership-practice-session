import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from "react-router-dom";
import { NetflixHome } from "./Components/NetflixHome";
import { NetflixMovies } from "./Components/NetflixMovies";
import { NetflixShows } from "./Components/NetflixShows";
import { Navbar } from "./Components/Navbar";
import { HomeComponent } from "./Components/HomeComponent";
import { ErrorNotFound } from "./Components/ErrorNotFound";
import { Watch } from "./components/Watch";
import { TeamDetail } from './Components/TeamDetail';


function App() {
 const [count, setCount] = useState(0)
    
  return (
      <div>
      <Navbar></Navbar>
            <Routes>
        <Route path="/netflixhome" element={<NetflixHome />}></Route>
        <Route path="/netflixmovies" element={<NetflixMovies />}></Route>
        <Route path="/TeamDetails" element={<TeamDetail />}></Route>
        <Route path="/netflixshows" element={<NetflixShows />}></Route>
        <Route path="/" element = {<HomeComponent/>}></Route>
        <Route path="/watch/:name" element = {<Watch/>}></Route>
        <Route path="/Teams/:name" element = {<Watch/>}></Route>
        <Route path="/*" element = {<ErrorNotFound/>}></Route>
      </Routes>
      </div>
  )
}

export default App

