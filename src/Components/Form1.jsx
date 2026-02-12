import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const Form1 = () => {
    const { register, handleSubmit } = useForm()
    const [submittedData, setSubmittedData] = useState(null)
    
    const submitHandler = (data) => {
        setSubmittedData(data)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>Form1 Component</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
        <div>
            <label>Name: </label>
            <input type="text" {...register("name")} placeholder='Enter Name'/>
        </div>
        <div>
            <label>Age: </label>
            <input type="number" {...register("age")} placeholder='Enter Age'/>
        </div>
        <div>
            <label>Date: </label>
            <input type="date" {...register("dob")}/>
        </div>
        <div>
            <label>Gender: </label>
            <input type="radio" value="male" {...register("gender")}/> Male
            <input type="radio" value="female" {...register("gender")}/> Female
        </div>
        <div>
            <label>Phone: </label>
            <input type="tel" {...register("phone")} placeholder='Enter Phone'/>
        </div>
        <button type="submit">Submit</button>
        </form>
        {
            submittedData && 
            <div>
                <p>Name: {submittedData.name}</p>
                <p>Age: {submittedData.age}</p>
                <p>Date: {submittedData.dob}</p>
                <p>Gender: {submittedData.gender}</p>
                <p>Phone: {submittedData.phone}</p>
            </div>
        }
    </div>
  )
}
