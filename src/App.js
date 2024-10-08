import React from "react";
import MyButton from "./components/Button.tsx";
import Game from "./components/Game.tsx";
import Test from "./components/test.tsx";
import Adder from "./components/Adder.tsx";

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>

      <h1>欢迎来到我的应用</h1>
      
      <MyButton
        disabled={false}
        title="我是一个按钮"
        onClick={() => alert("按钮被点击了")}
      />
      <br />
      <div
        style={{ border: "1px solid black", width: "300px", height: "400px" }}
      >
        <Game />
        
      </div>
      <div
        style={{ border: "1px solid black", width: "300px", height: "200px" }}
      >
       <Adder />
      </div>
      

    </div>
  );
}

export default App;
