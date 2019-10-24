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
import PureComp from './components/PureComp';
import RefsDemo from './components/RefsDemo';
import Input from './components/Input';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import Counter1 from './components/Counter1';

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

      {/* <FragmentDemo></FragmentDemo>

      <Table></Table> */}

      {/* <ParentComponent></ParentComponent> */}
      {/* <RefsDemo></RefsDemo> */}

      {/* <FocusInput></FocusInput>*/}

      {/* <FRParentInput></FRParentInput> */}
      {/* <ErrorBoundary>
        <Hero heroName="Bat"></Hero>
        <Hero heroName="dog"></Hero>
        <Hero heroName="Joker"></Hero>

      </ErrorBoundary> */}

      {/* 
      <ClickCounter name="HUssein">
      </ClickCounter>
      <HoverCounter></HoverCounter> */}
      {/* 
      <ClickCounterTwo></ClickCounterTwo>
      <HoverCounterTwo></HoverCounterTwo>
      <User name={(isLoggedIn) => isLoggedIn ? "Husseinn" : "Guest"}></User> */}


      <Counter1 render={(count, incrementCount) => (
        <ClickCounterTwo count={count} incrementCount={incrementCount} ></ClickCounterTwo>
      )}></Counter1>

      <Counter1 render={(count, incrementCount) => (
        <HoverCounterTwo count={count} incrementCount={incrementCount} ></HoverCounterTwo>
      )

      }></Counter1>
    </div>
  );
}

export default App;
