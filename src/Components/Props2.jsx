import React from 'react'
import { Props3 } from './Props3'

export const Props2 = (props) => {
  return (
    <div>
        <h1>Props2</h1>
        <table>
          <tbody>
            {props.student?.map((std) => {
              return (
                <tr key={std.id}>
                  <td>{std.id}</td>
                  <td>{std.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Props3 student0={props.student}></Props3>
        
    </div>
  )
}
