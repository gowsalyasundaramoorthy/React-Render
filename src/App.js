import React from 'react'
import './App.css';
import { ChildA } from './Component/Context/ContextChildren';
import { ContextParent } from './Component/Context/ContextParent';
import { Parent3 } from './Component/IncorrectOptimisation/Parent3';
import { Parent4 } from './Component/IncorrectOptimisation/Parent4';
import { Child1 } from './Component/Optimisation/Child1';
import { GrandParent } from './Component/Optimisation/GrandParent';
import { Parent1 } from './Component/Optimisation/Parent1';
import { Parent2 } from './Component/Optimisation/Parent2';

function App() {
  return (
    <div className="App">
      {/* <Parent1>

        <Child1 />
      </Parent1> */}

      {/* <GrandParent /> */}

      {/* <Parent4 /> */}

      <ContextParent>
        <ChildA />

      </ContextParent>


    </div>
  );
}

export default App;
