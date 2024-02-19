import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux"
// For Redux ONLY
// import counterStore from './store/couterStore'; 

// For Redux ToolKit
import counterToolKitStore from "./store/CounterToolKitStore"

import LoginForm from './LoginForm';
import Header from "./Header"
import UserProfile from "./UserProfile"
import Counter from "./Counter"


function App() {
  return (
    /*
    <Provider store = {counterStore}>
      <Counter/>
    </Provider>
    */
    <Provider store = {counterToolKitStore}>
      <Header/>
      <UserProfile/>
      <LoginForm/>
      <Counter/>
    </Provider>
  );
}

export default App;
