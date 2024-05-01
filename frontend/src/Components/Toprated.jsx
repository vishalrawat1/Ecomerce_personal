import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Toprated = () => {
    axios.get('http://localhost:5000/getitems')
    .then((res) => {
      const data = res.data;
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      }); 
  return (
    <div>
        sdfa
    </div>
  );
};

export default Toprated;
