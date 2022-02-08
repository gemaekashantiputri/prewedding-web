import React, { useState } from 'react'
import axios from "axios";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [msg, setMsg] = useState('');
  const history = useHistory();

  const Register = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/users', {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword
      });
      history.push("/signin");
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
      }
    }
  }

  return (
    <>

      <div class="container">

        <ol class="breadcrumb">
          <li><a href="/">Home</a></li>
          <li class="active">Registration</li>
        </ol>

        <div class="row">
          <article class="col-xs-12 maincontent">

            <div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
              <div class="panel panel-default">
                <div class="panel-body">
                  <h3 class="thin text-center">Registrasi</h3>
                  <p class="text-center text-muted">Daftar akunmu sekarang, <a href="/signin">Login</a> Jika sudah memiliki akun, silahkan login dengan akunmu. </p>
                  <hr></hr>

                  <form onSubmit={Register}>
                    <p className='has-text-centered'>{msg}</p>
                    <div class="top-margin">
                      <label>Username</label>
                      <input type="text" class="form-control" placeholder='username' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div class="top-margin">
                      <label>Email<span class="text-danger">*</span></label>
                      <input type="text" class="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div class="row top-margin">
                      <div class="col-sm-6">
                        <label>Password <span class="text-danger">*</span></label>
                        <input type="text" class="form-control" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                      </div>
                      <div class="col-sm-6">
                        <label>Confirm Password <span class="text-danger">*</span></label>
                        <input type="text" class="form-control" placeholder="******" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                      </div>
                    </div>

                    <hr></hr>

                    <div class="row">
                      <div class="col-lg-4 text-right">
                        <button class="btn btn-action" type="submit">Register</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

            </div>

          </article>

        </div>
      </div></>
  )
}

export default SignUp
