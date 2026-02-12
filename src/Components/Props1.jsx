import React from 'react'
import { Props2 } from './Props2'

export const Props1 = () => {
  var student0 = [
      {id:1, name:"Bhavya", age:21, gender:"female"},
      {id:2, name:"Ram", age:20, gender:"male"},
      {id:3, name:"Meet", age:23, gender:"male"},
      {id:4, name:"Ronith", age:26, gender:"male"},        
    ]
  return (
    
    <div style={{textAlign:"center"}}>
      <h1> props</h1>
      <Props2  student={student0}>Props1</Props2>
    </div>
  )
}
