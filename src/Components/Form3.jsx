import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Country, State } from "country-state-city";

export const Form3 = () => {
    const { register, handleSubmit, watch } = useForm()
    const [submittedData, setSubmittedData] = useState(null)
    
    const allCountries = Country.getAllCountries();
    const countryId = watch("country");
    const allStates = State.getStatesOfCountry(countryId);

    const submitHandler = (data) => {
        setSubmittedData(data)
    }

    

  return (
    <div style={{textAlign:"center"}}>
        <h1>Form3 Component</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
        <div>
            <label>Name: </label>
            <input type="text" {...register("name")} placeholder='Enter Name'/>
        </div>
        <div>
            <label>FatherName: </label>
            <input type="text" {...register("fathername")} placeholder='Enter FatherName'/>
        </div>
        <div>
            <label>MotherName </label>
            <input type="text" {...register("mothername")} placeholder='Enter MotherName'/>
        </div>
        <div>
            <label>ParentPhone: </label>
            <input type="tel" {...register("phone")} placeholder='Enter Phone'/>
        </div>
        <div>
            <label>Country: </label>
            <select {...register("country")}>
                <option value="">Select Country</option>
                {
                    allCountries.map((c) => {
                        return <option key={c.isoCode} value={c.isoCode}>{c.name}</option>
                    })
                }
            </select>
        </div>
        <div>
            <label>State: </label>
            <select {...register("state")}>
                <option value="">Select State</option>
                {
                    allStates.map((s) => {
                        return <option key={s.isoCode} value={s.isoCode}>{s.name}</option>
                    })
                }
            </select>
        </div>
        <button type="submit">Submit</button>
        </form>
        {
            submittedData && 
            <div>
                <p>Name: {submittedData.name}</p>
                <p>FatherName: {submittedData.fathername}</p>
                <p>MotherName: {submittedData.mothername}</p>
                <p>Phone: {submittedData.phone}</p>
                <p>Country: {submittedData.country}</p>
                <p>State: {submittedData.state}</p>
            </div>
        }
    </div>
  )
}
