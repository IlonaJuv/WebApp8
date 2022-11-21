import React, { useState } from 'react';
import axios from 'axios'

/*
//GA 2
import './App.css';

const App = () => {

  const [city, setCity] = useState('');
  const [temp, setTemp] = useState(0);

  const submitForm = e => {
    e.preventDefault();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=283ceebfe4e85c65eff91264b4e0411f&units=metric`;
  
    axios.get(url)
      .then(res => {
          console.log(res);
          setTemp(res.data.main.temp);
    })
  };

  return (

  <div className="page">

  <div className="box">

  <form onSubmit={submitForm} className="weather-form">

      <label htmlFor="city">City name: </label>

           <input type="text" id="city" placeholder="Type a city" value={city} onChange={e => setCity(e.target.value)} />

      <button className="weather-button">Get temperature</button>

    </form>

    <div className="temp"> {temp} C </div>

  </div>

  </div>

  );

};
*/

//GA 3

const baseURL = "https://jsonplaceholder.typicode.com/posts";

 function App() {
  const [post, setPost] = useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function createPost() {
    axios
      .post(baseURL, {
        title: "Hello World!",
        body: "This is a new post."
      })
      .then((response) => {
        console.log(response.data)
        setPost(response.data);
      });
  }

  function updatePost() {
    axios
      .put(`${baseURL}/1`, {
        title: "Hello World!",
        body: "This is an updated post."
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  function deletePost() {
    axios
      .delete(`${baseURL}/1`)
      .then(() => {
        alert("Post deleted!");
        setPost(null)
      });
  }

  if (!post) return "No posts!";

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={createPost}>Create Post</button>
      <button onClick={updatePost}>Update Post</button>
      <button onClick={deletePost}>Delete Post</button>
    </div>
  );
}

export default App;
