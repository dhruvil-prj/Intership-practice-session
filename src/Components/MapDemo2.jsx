import React from 'react'

export const MapDemo2 = () => {

    var users = [
        {id:3, name:"meet",age:23 },
        {id:4, name:"bhavy",age:20},
        {id:5, name:"rahul",age:26},
    ]
  return (
    <div><h1>MapDemo2</h1>
    {
      users.map((user)=>{
        return <li>{user.id} --{user.name} --{user.age}</li>
      })
    }
    </div>
  )
}
