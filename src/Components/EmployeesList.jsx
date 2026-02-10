import React from 'react'
import { SubEmployeeList } from './SubEmployeeList'

export const EmployeesList = (props) => {
    console.log("emplist",props)
  return (
    <div style={{textAlign:"center"}}>
        <h1>EmployeesList</h1>
        {props.title}
        <h1>{props.company.name}</h1>
        <h1>{props.company.year}</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>age</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.employees.map((emp)=>{                 
                        return <tr>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.age}</td>
                        </tr>
                    })
                }
            </tbody>
            </table>
            <SubEmployeeList title={props.title}></SubEmployeeList>
    </div>
  )
}
