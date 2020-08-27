import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { MdFlightTakeoff } from 'react-icons/md';
import './style.css';

export default function Home() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    async function loadApi() {
      const response = await api.get('trips');
      setTrips(response.data);

    }

    loadApi();

  }, []);



 return (
   <div>
     <h1>Home</h1>
   </div>
 );
}