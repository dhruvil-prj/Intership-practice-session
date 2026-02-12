import React, {useState} from "react"; 

export const UseStateDemo3 = () => {
    const [users, setUsers] = useState(["parth","raj"]);
    const addUser = ()=>{
        setUsers([...users,"meet"])
    }
    return (
        <div style={{textAlign:"center"}}>
            <h1>UseStateDemo3</h1>
            {
                users.map((u, index)=>{
                    return <li key={index}>{u}</li>
                })
            
            }
            <button onClick={addUser}>Add User</button>
            
        </div>
)
    }