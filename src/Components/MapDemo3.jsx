import React from 'react'

export const MapDemo3 = () => {
    var student = [
        {id:3, name:"meet",age:23, gender:"male" },
        {id:4, name:"bhavy",age:20, gender:"female"},
        {id:5, name:"rahul",age:26, gender:"male"},
    ]
  return (
    <div style={{textAlign:"center"}}>
        <table border="2" align='center'>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>age</th>
              <th>gender</th>
            </tr>
          </thead>
            <tbody>
              {
                student.map((st)=>{
                  return <tr>
                    <td>{st.id}</td>
                    <td>{st.name}</td>
                    <td>{st.age}</td>
                    <td>{st.gender}</td>
                  </tr>
                })
              }
            </tbody>
        </table>
    </div>
  )
}
