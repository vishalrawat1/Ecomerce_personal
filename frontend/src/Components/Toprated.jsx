import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Toprated = () => {
  const [item, setitem] = useState([]);
  const [filter, setfilter] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/getitems')
      .then((res) => {
        const item = res.data.data;
        console.log(item);
        setitem(item);
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
      });
  }, []);
  return (
    <div style={{ paddingLeft: '2rem' }}>
      <div style={{ textAlign: 'center' }}>
        <h5>Total Products In The Store - {item.length}</h5>
      </div>
      <div>
        <h5>Showing Results...</h5>
      </div>
        <div>
          <div className="container" style={{ paddingTop: '30px', width: 'auto', height: 'auto' }}>
            <div className="row">
              <div className="col-md-12" style={{ paddingTop: '75px' }}>
                <div className="container" style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '5px' }}>
                  <div className="row">
                    {item.map((item) => (
                      <div className="col-md-3" key={item._id} >
                        <div className="card">
                          <img src={item.imageLink} className="card-img-top" alt='sdfa' style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                          <div className="card-body">
                            <br></br>
                            <h5>{item.name}</h5>
                            <p style={{ width: 'auto', height: 'auto' }} >{item.description}</p>
                            <h4>{item.price} Rs</h4>
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
        </div>
      </div>
        );
};

        export default Toprated;
