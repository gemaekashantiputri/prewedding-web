/* eslint-disable no-template-curly-in-string */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useHistory, useParams, Link } from 'react-router-dom';
import '../styles/main.css';

const Dashboard = () => {
    const [weddings, setWeddings] = useState([]);

    useEffect(() => {
        getWeddings();
    }, []);

    const getWeddings = async () => {
        const response = await axios.get('http://localhost:5000/weddings');
        setWeddings(response.data);
    }
    const [name_wedding, setName_wedding] = useState('');
    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState('');
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        refreshToken();
        getUsers();
        getWeddingById();
    }, []);

    const getWeddingById = async () => {
        const response = await axios.get(`http://localhost:5000/weddings/${id}`);
        setName_wedding(response.data.name_wedding);
        setDescription(response.data.description);
        setPhoto(response.data.photo);
    }

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
            <div className="container mt-5">
                <h1>Welcome Back {name}</h1>
                <h2>Pilih Wedding Organizer Favorit Kamu</h2>
                <center>
                    <div class="area-box">
                        {weddings.map((wedding, index) => (
                            <><div class="card" >
                                <div class="card-header">
                                    <img src={`http://localhost:5000/singleimage/${wedding.photo}`} alt="puppy" />
                                </div>
                                <div class="card-body">
                                    <Link to={`/open/${wedding.id}`}>{wedding.name_wedding}</Link>
                                    <p>
                                        {wedding.description}
                                    </p>
                                </div>
                            </div>
                            </>
                        ))}
                    </div>

                </center>
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

export default Dashboard
