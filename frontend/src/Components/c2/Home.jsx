import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ paddingLeft: '20px', paddingRight: '20px' }}>
      <div id="carouselExampleCaptions" className="carousel slide" >
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://via.placeholder.com/1920x400" className="d-block w-100" alt="Slide 1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Welcome </h5>
              <p>Check out the lates trends with us.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://via.placeholder.com/1920x400" className="d-block w-100" alt="Slide 2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Don't miss </h5>
              <p>Newly ddded items .</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://via.placeholder.com/1920x400" className="d-block w-100" alt="Slide 3" />
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

      <div className="container" style={{ paddingTop: '30px' }}>
        <div className="row">
          <div className="col-md-5">
            <div className="container" style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '5px', }}>
              <div className="row">
                <div className="col-md-6">
                  <div className="card">
                  <img src='' className="card-img-top" alt='sdfa'/>
                    <div className="card-body">
                    <br></br>
                    <h5>Product Name</h5>
                      This is some text within a card body.
                    </div>
                    <button type='submit'> Add </button>
                  </div>
                  <br></br>
                </div>
                <div className="col-md-6">
                <div className="card">
                  <img src='' className="card-img-top" alt='sdfa'/>
                    <div className="card-body">
                    <br></br>
                    <h5>Product Name</h5>
                      This is some text within a card body.
                    </div>
                    <button type='submit'> Add </button>
                  </div>
                  <br></br>
                </div>
              </div>
              {/* Second section */}
              <div className="row">
                <div className="col-md-6">
                <div className="card">
                  <img src='' className="card-img-top" alt='sdfa'/>
                    <div className="card-body">
                    <br></br>
                    <h5>Product Name</h5>
                      This is some text within a card body.
                    </div>
                    <button type='submit'> Add </button>
                  </div>
                  <br></br>
                </div>
                <div className="col-md-6">
                <div className="card">
                  <img src='' className="card-img-top" alt='sdfa'/>
                    <div className="card-body">
                    <br></br>
                    <h5>Product Name</h5>
                      This is some text within a card body.
                    </div>
                    <button type='submit'> Add </button>
                  </div>
                  <br></br>
                </div>
              </div>
            </div>
          </div>

          {/* Container 2 */}
          <div className="col-md-7">
            <div className="container" style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '5px', }}>
              {/* First section */}
              <div className="row">
                <div className="col-md-6">
                <div className="card">
                  <img src='' className="card-img-top" alt='sdfa'/>
                    <div className="card-body">
                    <br></br>
                    <h5>Product Name</h5>
                      This is some text within a card body.
                    </div>
                    <button type='submit'> Add </button>
                  </div>
                  <br></br>
                </div>
                <div className="col-md-6">
                <div className="card">
                  <img src='' className="card-img-top" alt='sdfa'/>
                    <div className="card-body">
                    <br></br>
                    <h5>Product Name</h5>
                      This is some text within a card body.
                    </div>
                    <button type='submit'> Add </button>
                  </div>
                  <br></br>
                </div>
              </div>
              {/* Second section */}
              <div className="row">
                <div className="col-md-6">
                <div className="card">
                  <img src='' className="card-img-top" alt='sdfa'/>
                    <div className="card-body">
                    <br></br>
                    <h5>Product Name</h5>
                      This is some text within a card body.
                    </div>
                    <button type='submit'> Add </button>
                  </div>
                  <br></br>
                </div>
                <div className="col-md-6">
                <div className="card">
                  <img src='' className="card-img-top" alt='sdfa'/>
                    <div className="card-body">
                    <br></br>
                    <h5>Product Name</h5>
                      This is some text within a card body.
                    </div>
                    <button type='submit'> Add </button>
                  </div>
                  <br></br>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '30px' }}>
        <div className="row">
          <div className="col-md-4" >
            <div className='container' style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '5px', }}>

              <div className='row'>
                <div className='col-md-6'>section 1
                <div className="card">
                  <img src='' className="card-img-top" alt='sdfa'/>
                    <div className="card-body">
                    <br></br>
                    <h5>Product Name</h5>
                      This is some text within a card body.
                    </div>
                    <button type='submit'> Add </button>
                  </div>
                  <br></br>
                </div>
                <div className='col-md-6'>section 1
                <div className="card">
                  <img src='' className="card-img-top" alt='sdfa'/>
                    <div className="card-body">
                    <br></br>
                    <h5>Product Name</h5>
                      This is some text within a card body.
                    </div>
                    <button type='submit'> Add </button>
                  </div>
                  <br></br>
                </div>
              </div>

            </div>
          </div>
          <div className="col-md-4" >
            <div className='container' style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '5px', }}>

              <div className='row'>
                <div className='col-md-6'>section 1
                <div className="card">
                  <img src='' className="card-img-top" alt='sdfa'/>
                    <div className="card-body">
                    <br></br>
                    <h5>Product Name</h5>
                      This is some text within a card body.
                    </div>
                    <button type='submit'> Add </button>
                  </div>
                  <br></br>
                </div>
                <div className='col-md-6'>section 1
                <div className="card">
                  <img src='' className="card-img-top" alt='sdfa'/>
                    <div className="card-body">
                    <br></br>
                    <h5>Product Name</h5>
                      This is some text within a card body.
                    </div>
                    <button type='submit'> Add </button>
                  </div>
                  <br></br>
                </div>
              </div>

            </div>
          </div>
          <div className="col-md-4" >
            <div className='container' style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '5px', }}>

              <div className='row'>
                <div className='col-md-6'>section 1
                <div className="card">
                  <img src='' className="card-img-top" alt='sdfa'/>
                    <div className="card-body">
                    <br></br>
                    <h5>Product Name</h5>
                      This is some text within a card body.
                    </div>
                    <button type='submit'> Add </button>
                  </div>
                  <br></br>
                </div>
                <div className='col-md-6'>section 1
                <div className="card">
                  <img src='' className="card-img-top" alt='sdfa'/>
                    <div className="card-body">
                    <br></br>
                    <h5>Product Name</h5>
                      This is some text within a card body.
                    </div>
                    <button type='submit'> Add </button>
                  </div>
                  <br></br>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
