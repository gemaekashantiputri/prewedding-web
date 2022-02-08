import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useHistory, useParams, Link } from 'react-router-dom';
import '../styles/order.css';
import '../styles/main.css';
import '../styles/sign.css';
import '../styles/font-awesome.min.css';
import '../styles/bootstrap.min.css';
import '../styles/bootstrap-theme.css';
import '../styles/card.css';


const History = () => {
  const [confirmations, setConfirmations] = useState([]);

  useEffect(() => {
    getConfirmations();
    getConfirmationsById();
  }, []);

  const getConfirmations = async () => {
    const response = await axios.get('http://localhost:5000/confirmations');
    setConfirmations(response.data);
  }
  const [fullName, setfullName] = useState('');
  const [tgl_Wedding, settgl_Wedding] = useState('');
  const [biayaMaksimum, setbiayaMaksimum] = useState('');
  const [paket, setpaket] = useState('');
  const [catatanTambahan, setcatatanTambahan] = useState('');
  const { id } = useParams();

  const getConfirmationsById = async () => {
    const response = await axios.get(`http://localhost:5000/confirmations/${id}`);
    setfullName(response.data.fullName);
    settgl_Wedding(response.data.tgl_Wedding);
    setbiayaMaksimum(response.data.biayaMaksimum);
    setpaket(response.data.paket);
    setcatatanTambahan(response.data.catatanTambahan);
  }
  return (
    <><div className='order-area'>
      {confirmations.map((confirmation) => (
        <>
          <div className='table-history'>
            <div class="table">
              <div class="table-header">
                <div class="header__item"><a id="name" class="filter__link">Antrian</a></div>
                <div class="header__item"><a id="name" class="filter__link" href="#">Nama Lengkap</a></div>
                <div class="header__item"><a id="wins" class="filter__link filter__link--number" >Tanggal Pernikahan</a></div>
                <div class="header__item"><a id="draws" class="filter__link filter__link--number" >Biaya Maksimum</a></div>
                <div class="header__item"><a id="draws" class="filter__link filter__link--number" >Paket Pernikahan</a></div>
                <div class="header__item"><a id="losses" class="filter__link filter__link--number" >Catatan Tambahan</a></div>
                <div class="header__item"><a id="losses" class="filter__link filter__link--number">Detail</a></div>
                <div class="header__item"><a id="losses" class="filter__link filter__link--number">Pembayaran</a></div>
              </div>
              <div class="table-content">
                <div class="table-row">
                  <div class="table-data">{confirmation.id}</div>
                  <div class="table-data">{confirmation.fullName}</div>
                  <div class="table-data">{confirmation.tgl_Wedding}</div>
                  <div class="table-data">{confirmation.biayaMaksimum}</div>
                  <div class="table-data">{confirmation.paket}</div>
                  <div class="table-data">{confirmation.catatanTambahan}</div>
                  <div className='table-data'><Link to={`/order/${confirmation.id}`}><button type="button">Detail</button></Link></div>
                  <div className='table-data'><Link to={`/payment/${confirmation.id}`}><button type="button">Pembayaran</button></Link></div>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
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

export default History;