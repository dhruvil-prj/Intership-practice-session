import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const Form2 = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [submittedData, setSubmittedData] = useState(null)
    
    const submitHandler = (data) => {
        setSubmittedData(data)
    }
    const validation = {
        address: {
            required: {
                value: true,
                message: "Address is required",
            }
        },
        salary: {
            required: {
                value: true,
                message: "Salary is required",
            }
        },
        email: {
            required: {
                value: true,
                message: "Email id is required",
            }
        },
        password: {
            required: {
                value: true,
                message: "Password is required",
            }
        },
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>Form2 Component</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
        <div>
            <label>Address </label>
            <input type="text" {...register("address", validation.address)} placeholder='Enter Address'/>
            <p style={{ color: "red" }}>{errors?.address?.message}</p>
        </div>
        <div>
            <label>Salary </label>
            <input type="number" {...register("salary", validation.salary)} placeholder='Enter Salary'/>
            <p style={{ color: "red" }}>{errors?.salary?.message}</p>
        </div>
        <div>
            <label>Email: </label>
            <input type="email" {...register("email", validation.email)} placeholder='Enter Email'/>
            <p style={{ color: "red" }}>{errors?.email?.message}</p>
        </div>
        <div>
            <label>Password: </label>
            <input type="password" {...register("password", validation.password)} placeholder='Enter Password'/>
            <p style={{ color: "red" }}>{errors?.password?.message}</p>
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
