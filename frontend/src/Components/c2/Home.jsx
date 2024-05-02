import axios from 'axios';
import { set } from 'mongoose';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [firsttable, setFirsttable] = useState([]);
  const [secondtable, setsecondtable] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:5000/getitems')
      .then((res) => {
        const sliceddata = res.data.data.slice(0,8);
        setdata(sliceddata);
        const firsttable = res.data.data.filter(item => item.category === 'cloth').slice(0, 4);
        setFirsttable(firsttable); // Changed from setClothItems to setFirsttable
        // console.log(firsttable);

        const secondtable = res.data.data.filter(item => item.category === 'car').slice(0, 4);
        setsecondtable(secondtable);
        console.log(secondtable);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ paddingLeft: '20px', paddingRight: '20px' }}>
      <div id="carouselExampleCaptions" className="carousel slide" >
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01052024-MainBannerDailyChanging-Z1-P2-AX-M&S-min40-extra750.jpg" className="d-block w-100" alt="Slide 1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Welcome </h5>
              <p>Check out the lates trends with us.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01052024-MainBannerDailyChanging-Z1-P1-GAP-LEVIS-4070off.jpg" className="d-block w-100" alt="Slide 2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Don't miss </h5>
              <p>Newly ddded items .</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01052024-MainBannerDailyChanging-Z1-P3-DNMX-Netplay-min60.jpg" className="d-block w-100" alt="Slide 3" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Trending...</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01052024-MainBannerDailyChanging-Z1-P6-ADIDASKIDS-MOTHERCARE-MIN40ss.jpg" className="d-block w-100" alt="Slide 4" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Trending...</h5>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container" style={{ paddingTop: '30px' , width:'auto' , height:'auto'}}>
        <div className="row">
          <div className="col-md-5" style={{paddingTop:'75px'}}>
            <div className="container" style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '5px'}}>
              <div className="row">
                {firsttable.map((firsttable) => (

                  <div className="col-md-6" key={firsttable._id} >
                    <div className="card">
                      <img src={firsttable.imageLink} className="card-img-top" alt='sdfa' style={{ width: '100%', height: '200px', objectFit: 'cover' }}/>
                      <div className="card-body">
                        <br></br>
                        <h5>{firsttable.name}</h5>
                        <p style={{ width: 'auto', height: 'auto' }} >{firsttable.description}</p>
                        <h4>{firsttable.price} Rs</h4>
                      </div>
                      <button type='submit'> Add </button>
                    </div>
                    <br></br>
                  </div>

                ))}
              </div>
              {/* Second section */}
            </div>
          </div>

          {/* Container 2 */}
          <div className="col-md-7">
            <div className="container" style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '5px', }}>
              {/* First section */}
              <div className="row">
                {secondtable.map((secondtable) => (
                  <div className="col-md-6" key={secondtable._id}>
                    <div className="card">
                      <img src={secondtable.imageLink} className="card-img-top" alt='sdfa' style={{ width: '100%', height: '290px' }} />
                      <div className="card-body">
                        <br></br>
                        <h5>{secondtable.name}</h5>
                        <p style={{ width: 'auto', height: 'auto' }} >{secondtable.description}</p>
                        <h4>{secondtable.price} Rs</h4>
                      </div>
                      <button type='submit'> Add </button>
                    </div>
                    <br></br>
                  </div>
                ))}
              </div>
              {/* Second section */}
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '30px' }}>
        <div className="row">
          {data.map((item) => (
            <div className="col-md-3" key={item._id}>
              <div className='container' style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '5px', }}>
                <div className='row'>
                    <div className="card">
                      <img src={item.imageLink} className="card-img-top" alt='sdfa' style={{ width: '100%', height: '290px' }} />
                      <div className="card-body">
                        <br></br>
                        <h5>{item.name}</h5>
                        <p style={{ width: 'auto', height: 'auto' }} >{item.description}</p>
                        <h4>{item.price} Rs</h4>
                      </div>
                      <button type='submit'> Add </button>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
