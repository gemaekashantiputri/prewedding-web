import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import '../styles/main.css';
import '../styles/sign.css';
import '../styles/font-awesome.min.css';
import '../styles/bootstrap.min.css';
import '../styles/bootstrap-theme.css';
import '../styles/card.css';

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const history = useHistory();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/login', {
        email: email,
        password: password
      });
      history.push("/dashboard");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  }

  return (
    <>
      <header id="head">
        <div class="container">
          <div class="row">
            <h1 class="lead">PreWedding</h1>
            <p class="tagline">PreWedding help your dream wedding come true </p>
          </div>
        </div>
      </header>
      <center>
        <div class="area-box">
          <div class="card">
            <div class="card-header">
              <img src="./images/puppy.jpg" alt="puppy" />
            </div>
            <div class="card-body">
              <a href="/" onSubmit={Auth}>Puppy Wedding</a>
              <p>
                We make your wedding with puppy decoration. Wait for you
              </p>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <img src="./images/pinkwedding.jpg" alt="pink" />
            </div>
            <div class="card-body" onSubmit={Auth}>
              <a href="/">Pink Wedding</a>
              <p>
                We will make your wedding with elegant pink vibes.
              </p>
            </div>
          </div>
        </div>
      </center>
      <footer>

        <div class="footer1">
          <div class="container">
            <center>
              <h4>Copyright PreWedding - Capstone 2021</h4>
            </center>
          </div>
        </div>

      </footer></>
  )
}

export default Home;