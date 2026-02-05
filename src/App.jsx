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
import { Watch } from "./Components/Watch";
import { TeamDetail } from './Components/TeamDetail';
import { Playing } from './Components/Playing';


function App() {
 const [count, setCount] = useState(0)
    
  return (
      <div>
      <Navbar></Navbar>
            <Routes>
        <Route path="/netflixhome" element={<NetflixHome />}></Route>
        <Route path="/netflixmovies" element={<NetflixMovies />}></Route>
        <Route path="/netflixshows" element={<NetflixShows />}></Route>
        <Route path="/" element = {<HomeComponent/>}></Route>
        <Route path="/watch/:name" element = {<Watch/>}></Route>
        <Route path="/*" element = {<ErrorNotFound/>}></Route>
        <Route path="/teamDetails" element={<TeamDetail />}></Route>
        <Route path="/playing/:teamName" element={<Playing />}></Route>
      </Routes>
      </div>
  )
}

export default App
