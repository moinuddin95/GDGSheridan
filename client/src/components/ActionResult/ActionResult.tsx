import React from 'react';
import "./ActionResult.css";
interface ActionResultProps {
  message: string;
  isSuccess: boolean;
}

const ActionResult: React.FC<ActionResultProps> = ({ message, isSuccess }) => {
  return (
    <main className={`action-result ${isSuccess ? 'success' : 'error'}`}>
      <h1>{isSuccess ? 'Success' : 'Error'}</h1>
      <p>{message}</p>
    </main>
  );
};

export default ActionResult;