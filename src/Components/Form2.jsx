import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const Form2 = () => {
    const { register, handleSubmit } = useForm()
    const [submittedData, setSubmittedData] = useState(null)
    
    const submitHandler = (data) => {
        setSubmittedData(data)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>Form2 Component</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
        <div>
            <label>Address </label>
            <input type="text" {...register("address")} placeholder='Enter Address'/>
        </div>
        <div>
            <label>Salary </label>
            <input type="number" {...register("salary")} placeholder='Enter Salary'/>
        </div>
        <div>
            <label>Email: </label>
            <input type="email" {...register("email")} placeholder='Enter Email'/>
        </div>
        <div>
            <label>Password: </label>
            <input type="password" {...register("password")} placeholder='Enter Password'/>
        </div>
        <div>
            <label> Job: </label>
            <input type="radio" value="Work From Home" {...register("job")}/> Work From Home
            <input type="radio" value="Work From Office" {...register("job")}/> Work From Office
        </div>
        <button type="submit">Submit</button>
        </form>
        {
            submittedData && 
            <div>
                <p>Address: {submittedData.address}</p>
                <p>Salary: {submittedData.salary}</p>
                <p>Email: {submittedData.email}</p>
                <p>Password: {submittedData.password}</p>
                <p>Job: {submittedData.job}</p>
            </div>
        }
    </div>
  )
}
