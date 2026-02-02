import React from 'react'

export const MapDemo6 = () => {
    var student = [
        {id:3, name:"meet",age:23, gender:"male", marks:49, city:"mehshana"},
        {id:4, name:"bhavy",age:20, gender:"female",marks:70, city:"patan"},
        {id:5, name:"rahul",age:26, gender:"male",marks:82, city:"rampura"},
    ]
  return (
    <div style={{textAlign:"center"}}>
        <table border="2" align='center'>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>age</th>
              <th>marks</th>
              <th>gender</th>
              <th>city</th>
            </tr>
          </thead>
            <tbody>
              {
                student.map((st)=>{
                  return <tr>
                    <td>{st.id}</td>
                    <td>{st.name}</td>
                    <td style={{color: st.age>24 ? "red" :"black"}}>{st.age}</td>
                    <td style={{backgroundColor: st.marks>80 ? "red" : 'yellow'}}>{st.marks}</td>
                    <td>{st.gender}</td>
                    <td>{st.city}</td>
                  </tr>
                })
              }
            </tbody>
        </table>
    </div>
  )
}
