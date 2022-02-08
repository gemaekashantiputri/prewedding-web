import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import '../styles/main.css';
import '../styles/sign.css';
import '../styles/font-awesome.min.css';
import '../styles/bootstrap.min.css';
import '../styles/bootstrap-theme.css';
import '../styles/card.css';
import '../styles/confirmation.css';


const Confirmation = () => {
  const [weddings, setWeddings] = useState([]);

  useEffect(() => {
    getWeddings();
  }, []);

  const getWeddings = async () => {
    const response = await axios.get('http://localhost:5000/weddings');
    setWeddings(response.data);
  }
  const [fullName, setfullName] = useState('');
  const [tgl_Wedding, settgl_Wedding] = useState('');
  const [biayaMaksimum, setbiayaMaksimum] = useState('');
  const [paket, setPaket] = useState('');
  const [catatanTambahan, setcatatanTambahan] = useState('');
  const history = useHistory();

  const createConfirmations = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/confirmations', {
        fullName: fullName,
        tgl_Wedding: tgl_Wedding,
        biayaMaksimum: biayaMaksimum,
        paket: paket,
        catatanTambahan: catatanTambahan
      });
      history.push("/order/1");
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
      }
    }
  }
  return (
    <>
      <p className="text-center text-muted">Isi datamu dengan benar, <a href="/history">History</a>
        Jika sudah pernah mengisi data.</p>
      <form onSubmit={createConfirmations}>
        <ul class="form-style-1">
          <li>
            <label>Nama Lengkap <span class="required">*</span></label>
            <input class="field-long" value={fullName} onChange={(e) => setfullName(e.target.value)} />
          </li>
          <li>
            <label>Tanggal Pernikahan <span class="required">*</span></label>
            <input class="field-long" value={tgl_Wedding} onChange={(e) => settgl_Wedding(e.target.value)} />
          </li>
          <li>
            <label>Biaya Maksimum <span class="required">*</span></label>
            <input class="field-long" value={biayaMaksimum} onChange={(e) => setbiayaMaksimum(e.target.value)} />
          </li>
          <li>
            <label>Paket <span class="required">*</span></label>
            <select value={paket} onChange={(e) => setPaket(e.target.value)}>

              <option name="" value="0">Pilih Paket</option>
              <option name="table1"  >Puppy Wedding</option>
              <option name="table2" >Pink Wedding</option>

            </select>
          </li>
          <li>
            <label>Catatan Tambahan<span class="required">*</span></label>
            <textarea class="field-long field-textarea" value={catatanTambahan} onChange={(e) => setcatatanTambahan(e.target.value)}></textarea>
          </li>
          <li>
            <div class="row">
              <div class="col-lg-4 text-right">
                <button class="btn btn-action" type="submit">Confirm</button>
              </div>
            </div>
          </li>
        </ul>
      </form>

      <div class="footer1">
        <div class="container">
          <center>
            <h4>Copyright PreWedding - Capstone 2021</h4>
          </center>
        </div>
      </div>
    </>
  )
}

export default Confirmation;