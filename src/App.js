import React, {Component} from 'react';
import ThreadDisplay from './ThreadDisplay/ThreadDisplay';
import './App.css';

class  App extends Component {
  constructor(props){
    super(props);

  }


  render(){
    return (
      <div>
        <ThreadDisplay/>
      </div>
    );
  }
}

export default App;
