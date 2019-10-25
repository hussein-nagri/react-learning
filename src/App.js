import React from 'react';
import './App.css';
import './componentsFundamentals/Greet'
//import myComponent from './components/Greet';
import { Greet } from './componentsFundamentals/Greet';
import Welcome from './componentsFundamentals/Welcome';
import Message from './componentsFundamentals/Message';
import Counter from './componentsFundamentals/Counter';
import FunctionClick from './componentsFundamentals/FunctionClick';
import ClassClick from './componentsFundamentals/ClassClick';
import EventBind from './componentsFundamentals/EventBind';
import ParentComponent from './componentsFundamentals/ParentComponent';
import UserGreeting from './componentsFundamentals/UserGreeting';
import NameList from './componentsFundamentals/NameList';
import Stylesheet from './componentsFundamentals/Stylesheet';
//import InLine from './componentsFundamentals/inLine';
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from './componentsFundamentals/Form';
import LifecycleA from './componentsFundamentals/LifecycleA';
import FragmentDemo from './componentsFundamentals/FragmentDemo';
import Table from './componentsFundamentals/Table';
import PureComp from './componentsFundamentals/PureComp';
import RefsDemo from './componentsFundamentals/RefsDemo';
import Input from './componentsFundamentals/Input';
import FocusInput from './componentsFundamentals/FocusInput';
import FRParentInput from './componentsFundamentals/FRParentInput';
import Hero from './componentsFundamentals/Hero';
import ErrorBoundary from './componentsFundamentals/ErrorBoundary';
import ClickCounter from './componentsFundamentals/ClickCounter';
import HoverCounter from './componentsFundamentals/HoverCounter';
import ClickCounterTwo from './componentsFundamentals/ClickCounterTwo';
import HoverCounterTwo from './componentsFundamentals/HoverCounterTwo';
import User from './componentsFundamentals/User';
import Counter1 from './componentsFundamentals/Counter1';
import ComponentC from './componentsFundamentals/ComponentC';
import { userProvider } from './componentsFundamentals/userContext';
import PostList from './HttpAndHookComponents/PostList';
import PostForm from './HttpAndHookComponents/PostForm';
import ClassCounter from './HttpAndHookComponents/ClassCounter';
import HookCounterTwo from './HttpAndHookComponents/HookCounterTwo';
import HookCounterThree from './HttpAndHookComponents/HookCounterThree';

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


      {/* <Counter1 render={(count, incrementCount) => (
        <ClickCounterTwo count={count} incrementCount={incrementCount} ></ClickCounterTwo>
      )}></Counter1>

      <Counter1 render={(count, incrementCount) => (
        <HoverCounterTwo count={count} incrementCount={incrementCount} ></HoverCounterTwo>
      )

      }></Counter1> */}

      {/* <userProvider value="Hussein">
        <ComponentC>

        </ComponentC>
      </userProvider> */}


      {/* <PostList></PostList> */}

      {/* <PostForm></PostForm> */}


      {/* <ClassCounter></ClassCounter>
      */}

      {/* <HookCounterTwo></HookCounterTwo>
       */}


      <HookCounterThree></HookCounterThree>
    </div>
  );
}

export default App;
