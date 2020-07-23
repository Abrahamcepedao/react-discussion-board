import React, {Component} from 'react';
import ThreadDisplay from './ThreadDisplay/ThreadDisplay';
import firebaseDb from 'firebase';
import './App.css';

class  App extends Component {
  constructor(props){
    super(props);
  }


  render(){
    return (
      <div>
        <ThreadDisplay firebaseDb={firebaseDb}/>
      </div>
    );
  }
}

export default App;
