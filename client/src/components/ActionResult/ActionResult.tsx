import React from 'react';
import "./ActionResult.css";
import ActionResultProps from "../../interfaces/ActionResultProps";
function ActionResult({ message, isSuccess }: Readonly<ActionResultProps>){
  return (
    <main className={`action-result ${isSuccess ? 'success' : 'error'}`}>
      <h1>{isSuccess ? 'Success' : 'Error'}</h1>
      <p>{message}</p>
    </main>
  );
};

export default ActionResult;