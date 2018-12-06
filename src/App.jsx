import React, { Component } from 'react';
import Sidebar from './components/sidebar';
import NavBar from './components/navbar';

class App extends Component {



  
  render() {
    return (
      
        <div class="row">
            <div class="col-md-1">
            
              <Sidebar />
            
            </div>
            <div class="col-md-11">
            
            <NavBar />
            
            </div>
        
        
        </div>
     

        
          
      
    );
  }
}

export default App;
