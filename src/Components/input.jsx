import React from 'react'
import { useForm } from 'react-hook-form'

export const Input = () => {
    const { register, handleSubmit, watch } = useForm()
    const data = watch()

    const submitHandler = (data) => {
        console.log(data)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>Input Component</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
        <div>
            <label>Name: </label>
            <input type="text" {...register("name")} placeholder='Enter Name'/>
            {data.name}
        </div>
        <div>
            <label>Age: </label>
            <input type="number" {...register("age")} placeholder='Enter Age'/>
            {data.age}
        </div>
        <div>
            <label>Email: </label>
            <input type="email" {...register("email")} placeholder='Enter Email'/>
            {data.email}
        </div>
        <div>
            <label>Password: </label>
            <input type="password" {...register("password")} placeholder='Enter Password'/>
        </div>
        <div>
            <label>Date: </label>
            <input type="date" {...register("dob")}/>
            {data.dob}
        </div>
        <div>
            <label>Gender: </label>
            <input type="radio" value="male" {...register("gender")}/> Male
            <input type="radio" value="female" {...register("gender")}/> Female
            {data.gender}
        </div>
        <div>
            <label>Phone: </label>
            <input type="tel" {...register("phone")} placeholder='Enter Phone'/>
            {data.phone}
        </div>
        </form>
    </div>
  )
}