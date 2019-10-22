import React from 'react';
import './App.css';
import './components/Greet'
//import myComponent from './components/Greet';
import { Greet } from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';



function App() {
  return (
    <div className="App">
      <Greet name="Hussein" superName="HusseinSuper">
        <p>This is a children component being rendered</p>
      </Greet>
      <Greet name="Sabi">
        <button>Action</button>
      </Greet>
      <Greet name="Haseeb"></Greet>
      <Welcome name="Hussein" superName="HusseinSuper">
        <div>Hello world</div>  {/* this has no effect on the code at all*/}
      </Welcome>
      <Welcome name="Hussein" >
      </Welcome>
      <Message></Message>
      <Counter></Counter>
      <FunctionClick></FunctionClick>
      <ClassClick></ClassClick>
      <EventBind></EventBind>
    </div>
  );
}

export default App;
