import React from "react";
import { useParams } from "react-router-dom";

export const Teams = () => {
  
  const TeamDetail = useParams().name 

  return (
    <div style={{textAlign:"center"}}>
      <h1>WATCHING....{TeamDetail}</h1>
    </div>
  );
};