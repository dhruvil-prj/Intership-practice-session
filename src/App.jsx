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
import { FunctionDemo1 } from './Components/FunctionDemo1';
import { UseStateDemo1 } from './Components/UseStateDemo1';
import { UseStateDemo2 } from './Components/UseStateDemo2';
import { UseStateDemo3 } from './Components/UseStateDemo3';



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
        <Route path="/fuctiondemo1" element={<FunctionDemo1 />}></Route>
        <Route path="/useStateDemo1" element={<UseStateDemo1 />}></Route>
        <Route path="/useStateDemo2" element={<UseStateDemo2 />}></Route>
        <Route path="/useStateDemo3" element={<UseStateDemo3 />}></Route>
        
      </Routes>
      </div>
  )
}

export default App
