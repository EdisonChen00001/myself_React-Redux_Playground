import React , {Component} from 'react';
import {UserGreeting} from './UserGreeting';
import {GuestGreeting} from './GuestGreeting';

class Greeting extends Component{
   constructor(props){
       super(props)
   }

   render(){
       const isLoggedIn = props.isLoggedIn;
       if(isLoggedIn){
           return <UserGreeting />
       }
       return <GuestGreeting />
   }
}

export default Greeting;