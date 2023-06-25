import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import LoginForm from './components/LogIn';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AllPosts from './components/AllPosts';
import LandingPage from './components/LandingPage';
import Nav from './components/Nav';



function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/posts');
        setData(response.data.posts);
        console.log('Data:', response.data.posts);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    getPosts();
  }, []);

  return (
    <BrowserRouter>
    <Nav/>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/posts" render={() => <AllPosts data={data} />} />
       
        <Route path="/login" component={LoginForm} />
      </Switch>
    </BrowserRouter>
  );
  
}

export default App;

  

