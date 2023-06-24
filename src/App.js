import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = () => {
      axios.get('http://127.0.0.1:5000/posts')
        .then((res) => {
          setData(res.data);
          console.log('data', res.data.posts);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
    getData();
  }, []);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
