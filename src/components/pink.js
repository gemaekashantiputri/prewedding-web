/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useHistory, useParams } from 'react-router-dom';
import '../styles/main.css';
import '../styles/sign.css';
import '../styles/font-awesome.min.css';
import '../styles/bootstrap.min.css';
import '../styles/bootstrap-theme.css';
import '../styles/card.css';


const Pink = () => {
  const [name_wedding, setName_wedding] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState('');
  const [name, setName] = useState('');
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const [users, setUsers] = useState([]);
  const history = useHistory();
  const { id } = useParams();
  const [weddings, setWeddings] = useState([]);

  const getWeddings = async () => {
    const response = await axios.get('http://localhost:5000/weddings');
    setWeddings(response.data);
  }

  useEffect(() => {
    refreshToken();
    getUsers();
    getWeddingById();
    getWeddings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get('http://localhost:5000/token');
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setName(decoded.name);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        history.push("/");
      }
    }
  }

  const getWeddingById = async () => {
    const respone = await axios.get(`http://localhost:5000/weddings/${id}`);
    setName_wedding(respone.data.name_wedding);
    setDescription(respone.data.description);
    setPhoto(respone.data.photo);
  }

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(async (config) => {
    const currentDate = new Date();
    if (expire * 1000 < currentDate.getTime()) {
      const response = await axios.get('http://localhost:5000/token');
      config.headers.Authorization = `Bearer ${response.data.accessToken}`;
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setName(decoded.name);
      setExpire(decoded.exp);
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });

  const getUsers = async () => {
    const response = await axiosJWT.get('http://localhost:5000/users', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    setUsers(response.data);
  }
  return (
    <>
      <div class="box-puppy">
        <><img src="../images/pinkwedding.jpg" alt="pink" class="box-img" /><h2>Pink Wedding</h2><center>
          <p class="desc-puppy" color='white'>
            We will make your wedding with elegant pink vibes.
          </p>
          <a href="/confirmation"><button type="button">Order Jasa</button></a>
        </center></>
      </div>

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

export default Pink;