import React from 'react'

export const MapDemo1 = () => {
  let cars = ["bmw","Oudi","Thar","Aulto"];
  return (
    <div> 
      {
      cars.map((c)=>{ 
        return <h1>{c}</h1>
      })
    }
    </div>
  )
}
