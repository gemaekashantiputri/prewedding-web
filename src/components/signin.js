import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import '../styles/main.css';
import '../styles/sign.css';
import '../styles/font-awesome.min.css';
import '../styles/bootstrap.min.css';
import '../styles/bootstrap-theme.css';
import '../styles/card.css';

const Signin = () => {
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
    <><ol className="breadcrumb">
      <center>
        <li><a href="/">Home</a></li>
        <li className="active">User access</li>
      </center>
    </ol>

      <div className="row">
        <article className="col-xs-12 maincontent">

          <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <h3 className="thin text-center">Sign in to your account</h3>
                <p className="text-center text-muted">Login jika sudah memiliki akun, <a href="/signup">Register</a>
                  Jika belum silahkan daftarkan akunmu.</p>
                <hr></hr>

                <form onSubmit={Auth}>
                  <p className='has-text-centered'>{msg}</p>
                  <div className="top-margin">
                    <label>Email <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                  </div>
                  <div className="top-margin">
                    <label>Password <span className="text-danger">*</span></label>
                    <input type="password" className="form-control" placeholder='*****' value={password} onChange={(e) => setPassword(e.target.value)}>
                    </input>
                  </div>

                  <hr></hr>

                  <div className="row">
                    <div className="col-lg-4 text-right">
                      <button className="btn btn-action" type="submit">Sign in</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

          </div>

        </article>

      </div></>

  )
}

export default Signin
