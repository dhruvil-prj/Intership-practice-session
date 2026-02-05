import React from "react";
import { useParams } from "react-router-dom";

export const Playing = () => {
  
  const { teamName } = useParams();

  return (
    <div style={{textAlign:"center"}}>
      <h1>Playing....{teamName}</h1>
    </div>
  );
};