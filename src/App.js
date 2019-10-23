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
import ParentComponent from './ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import InLine from './components/InLine';
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Hussein" superName="HusseinSuper">
        <p>This is a children component being rendered</p>
      </Greet>
      <Greet name="Sabi">
        <button>Action</button>
      </Greet>
      <Greet name="Haseeb"></Greet>
      <Welcome name="Hussein" superName="HusseinSuper">
        <div>Hello world (This doesnt do anything at all)</div>     
      </Welcome>
      <Welcome name="Hussein" >
      </Welcome>
      <Message></Message>
      <Counter></Counter>
      <FunctionClick></FunctionClick>
      <ClassClick></ClassClick>
      <EventBind></EventBind>
      <ParentComponent></ParentComponent> */}

      {/* <UserGreeting></UserGreeting> */}
      {/* <NameList></NameList> */}
      {/* <Stylesheet primary={true}></Stylesheet>
      <InLine></InLine> */}
      {/* 
      <h1 className='error'> Error</h1>
      <h1 className={styles.success}> Success</h1>
 */}

      {/* <Form></Form> */}

      {/* <LifecycleA></LifecycleA> */}

      <FragmentDemo></FragmentDemo>

      <Table></Table>
    </div>
  );
}

export default App;
