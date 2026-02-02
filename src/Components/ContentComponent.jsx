import React from 'react'
import sarukh from "../assets/image/sarukh.png"
import "../assets/css/content.css"

export default function ContentComponent() {
    var Sahrukh = {
    name : "Sahrukh khan (Hakla)",
    age : 60,
    city : "Mumbai",
    }
  return (
    
    <div>
         <img src={sarukh} alt="sarukh" className='hakla'/>
        <h1><u>Sahrukh khan</u></h1>
       <h2>Name : {Sahrukh.name}</h2>
       <h2>Age : {Sahrukh.age}</h2>
       <h2>City : {Sahrukh.city}</h2>
       <p>Known for his trademark gelled spiked up crew cut with sunglasses, Shah Rukh Khan (SRK) 
        is an Indian Bollywood movie star, movie producer, magazine model, showman, public speaker, 
        author, philanthropist and television host/personality working predominantly in Hindi cinema.</p>
    </div>
  )
}
