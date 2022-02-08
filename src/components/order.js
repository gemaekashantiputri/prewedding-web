import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../styles/order.css';
import '../styles/main.css';
import '../styles/sign.css';
import '../styles/font-awesome.min.css';
import '../styles/bootstrap.min.css';
import '../styles/bootstrap-theme.css';
import '../styles/card.css';


const Order1 = () => {
  const [confirmations, setConfirmations] = useState([]);
  const [reports, setReports] = useState([]);

  useEffect(() => {
    getConfirmations();
    getReports();
  }, []);

  const getConfirmations = async () => {
    const response = await axios.get('http://localhost:5000/confirmations');
    setConfirmations(response.data);
  }
  const getReports = async () => {
    const response = await axios.get('http://localhost:5000/reports');
    setReports(response.data);
  }
  return (
    <>
      <div className='order-area'>
        {confirmations.map((confirmation) => (
          <>
            <div className='table-history'>
              <div class="table">
                <div class="table-header">
                  <div class="header__item"><h1 id="name" class="filter__link">Antrian</h1></div>
                  <div class="header__item"><h1 id="name" class="filter__link" >Nama Lengkap</h1></div>
                  <div class="header__item"><h1 id="wins" class="filter__link filter__link--number" >Tanggal Pernikahan</h1></div>
                  <div class="header__item"><h1 id="draws" class="filter__link filter__link--number" >Biaya Maksimum</h1></div>
                  <div class="header__item"><h1 id="draws" class="filter__link filter__link--number" >Paket Pernikahan</h1></div>
                  <div class="header__item"><h1 class="filter__link filter__link--number" >Catatan Tambahan</h1></div>
                </div>
                <div class="table-content">
                  <div class="table-row">
                    <div class="table-data">{confirmation.id}</div>
                    <div class="table-data">{confirmation.fullName}</div>
                    <div class="table-data">{confirmation.tgl_Wedding}</div>
                    <div class="table-data">{confirmation.biayaMaksimum}</div>
                    <div class="table-data">{confirmation.paket}</div>
                    <div class="table-data">{confirmation.catatanTambahan}</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      <center>
        <div class="box-report">
          <br></br>
          <br></br>
          {reports.map((report) => (
            <><form class="report-day">
              <label for="w3review">Laporan Harian</label>
              <textarea id="w3review" name="w3review" rows="4" cols="50">
                {report.report}
              </textarea>
              <br></br>
            </form><form class="report-day">
                <label for="w3review">Laporan Harian</label>
                <textarea id="w3review" name="w3review" rows="4" cols="50">
                  {report.report}
                </textarea>
                <br></br>
              </form><form class="report-day">
                <label for="w3review">Laporan Harian</label>
                <textarea id="w3review" name="w3review" rows="4" cols="50">
                  {report.report}
                </textarea>
                <br></br>
              </form><form class="report-day">
                <label for="w3review">Laporan Harian</label>
                <textarea id="w3review" name="w3review" rows="4" cols="50">
                  {report.report}
                </textarea>
                <br></br>
              </form></>
          ))}
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

export default Order1;