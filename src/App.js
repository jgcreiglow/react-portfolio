import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import Footer from './components/footer'
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (

<div style={{height: '900px', position: 'relative'}}>
    <Layout className="background"  >
        <Header transparent title="Jessica Creiglow" style={{color: 'white'}}>
            <Navigation>
                <Link to="/">About</Link>
                <Link to="/resume">Resume</Link>
                <Link  to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Jessica Creiglow">
            <Navigation>
               <Link to="/">About</Link> 
              <Link to="/resume">Resume</Link>
                <Link  to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content >   
            <hr />
            <Main />  
            <Footer />  
          </Content>

    </Layout>
</div>
    );
  }
}

export default App;
