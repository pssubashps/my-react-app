import React, { Component } from 'react';

import Layout from './components/Layout/Layout'
import Portfolio from './containers/Portfolio/Portfolio';
import './App.css';

class App extends Component {
  render() {
    return (
     <div>
       <Layout>
          <Portfolio></Portfolio>
       </Layout>
     </div>
    );
  }
}

export default App;
