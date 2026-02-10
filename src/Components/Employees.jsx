import React from 'react'
import { EmployeesList } from './EmployeesList'


export const Employees = () => {
    var title = "EmployeesApp";

    var company = {
        name:"TCS",
        year:2026,
    }

    var employees =[
        {id:101, name:"raj", age:23},
        {id:102, name:"jay", age:26},
        {id:103, name:"ram", age:24},
        {id:104, name:"mohan", age:22},
    ]
  return (
    <div style={{textAlign:"center"}}>
        <h1>Employees</h1>
        <EmployeesList title={title} company={company} employees={employees}>EmployeesList</EmployeesList>
    </div>
  )
}
