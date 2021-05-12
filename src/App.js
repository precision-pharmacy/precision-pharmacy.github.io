import { useState, useEffect } from 'react';
import { data } from './data';
import './App.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

data.map(item => item.What_to_do = item.What_to_do.split(','));

function App() {
  // const [info, setInfo] = useState(data);

  useEffect(() => {
    document.title = 'Precision Pharmacy 15th Anniversary Trip'
  });

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="./">
            {/* <img src={require('./assets/img/logo.png').default} alt="hmmm" /> */}
            Precision Pharmacy<br />
            <small>15th Anniversary Trip</small>
          </a>

          {/* <div className="collapse navbar-collapse" id="navbarText">
            <span className="navbar-text">
              15th Anniversary Trip
            </span>
          </div> */}

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

          </div>
        </div>
      </nav>

      <div className="container">
        <section className="row mt-5">
          <h3 className="text-center text-muted">Choose a destination to learn more:</h3>
          <ul className="nav justify-content-center">
            {data.map((trip, index) => {
              return (
                <li key={index} className="nav-item">
                  <a className="nav-link link-primary" href={`#${index}`}>{trip.Location}</a>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="row my-4">
          {data.map((trip, index) => {
            return (
              <div key={index} className="col-lg-6 my-4">
                <div id={index} className="card mx-3">
                  <div className="card-header">
                    <h2 className="text-primary text-center card-title m-3">
                      <em>
                        {trip.Location}
                      </em>
                    </h2>
                  </div>
                  <img src={require(`./assets/img/${index}.jpg`).default} className="card-img-middle" alt="..." />
                  <div className="card-body p-5">


                    <h3 className="text-secondary card-title">Distance</h3>
                    <p className="card-text">{trip.Distance}</p>
                    <p className="card-text"><strong>Total travel time:</strong> {trip.Total_Travel_Time}</p>

                    <h3 className="text-secondary card-title">Where to stay</h3>
                    <p className="card-text">
                      {trip.Where_to_stay}
                    </p>

                    {trip.Accommodation_Link ? (
                      <p className="card-text">
                        <a href={trip.Accommodation_Link} className="link-primary" target="_blank" rel="noreferrer">VRBO Listing</a>
                      </p>
                    ) : ''}

                    <h3 className="text-secondary cart-title">What to do</h3>
                    {/* <p className="card-text">{trip.What_to_do}</p> */}

                    <ul className="what-to-do">
                      {trip.What_to_do.map((action, index) => {
                        return (
                          <li key={index}>
                            {action}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </section>
      </div>

      <button onClick={() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }} className="btn btn-secondary" id="btt">
        Back to top
      </button>
    </>
  );
}

export default App;
