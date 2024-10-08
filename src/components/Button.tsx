import React from 'react';
import { useState } from 'react';

interface Button{
id: number;
title: string;
disabled: boolean;
onClick: () => void;
}


function MyButton(button: Button) {

    const [count, setCount] = useState<number>(0);
    //const[disabled, setDisabled] = useState(button.disabled);
    const date = new Date();

    return (
      <div>
        <button disabled={button.disabled} onClick={() => {setCount(count+1);alert("count+1")} }>{button.title}{count}</button>
        <h1>Today is {date.toLocaleDateString()}.</h1>
      </div>
    );
  }

  export default MyButton;
  
 