import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { HeaderComponent } from './Components/HeaderComponent'
import ContentComponent from './Components/ContentComponent'
import { FooterComponent } from './Components/FooterComponent'
import { MapDemo1 } from './Components/MapDemo1'
import { MapDemo2 } from './Components/MapDemo2'
import { MapDemo3 } from './Components/MapDemo3'
import { MapDemo4 } from './Components/MapDemo4'
import { MapDemo5 } from './Components/MapDemo5'
import { MapDemo6 } from './Components/MapDemo6'
import { MapDemo7 } from './Components/MapDemo7'
import { MapDemo8 } from './Components/MapDemo8'
import { MapDemo9 } from './Components/MapDemo9'
import { MapDemo10 } from './Components/MapDemo10'
//import './App.css'

function App() {
  const [count, setCount] = useState(0)
 
    
  return (
      <div>
      <HeaderComponent></HeaderComponent>  
       <ContentComponent></ContentComponent>
       <MapDemo1></MapDemo1>
       <MapDemo2></MapDemo2>
       <MapDemo3></MapDemo3>
       <MapDemo4></MapDemo4>
       <MapDemo5></MapDemo5>
       <MapDemo6></MapDemo6>
       <MapDemo7></MapDemo7>
       <MapDemo8></MapDemo8>
       <MapDemo9></MapDemo9>
       <MapDemo10></MapDemo10>
      
       <FooterComponent></FooterComponent>

      </div>
  )
}

export default App

