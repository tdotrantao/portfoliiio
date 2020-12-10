import React from 'react';
import './App.css';
import { Layout, Header, Drawer, Navigation, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-colour" title="Portfolio">
            <Navigation className="header-colour">
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link> 
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer className="nav-link" title="Menu">
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link> 
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
