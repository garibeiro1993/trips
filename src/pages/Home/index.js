import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../services/api';
import { MdFlightTakeoff } from 'react-icons/md';
import './style.css';
import { addReserveRequest } from '../../store/modules/reserve/actions';

export default function Home( { history }) {
  const dispatch = useDispatch();
  const [trips, setTrips] = useState([]);

  const reserves = useSelector(state => state.reserve);

  useEffect(() => {
    async function loadApi() {
      const response = await api.get('trips');
      setTrips(response.data);

    }

    loadApi();

  }, []);

  function handleAdd(id) {
    dispatch(addReserveRequest(id));

    history.push('/reservas');
  }

  return (
    <div>
      <div className="box">
        {trips.map(trip => (
          <li key={trip.id}>
            <img src={trip.image} alt={trip.title} />
            <strong>{trip.title}</strong>
            <span>Status: {trip.status ? 'Disponivel' : 'Indisponivel'}</span>&nbsp;
            <button
              type='button'
              onClick={() => handleAdd(trip.id)}
            >
              <div>
                <MdFlightTakeoff size={16} color="#FFF" />
              </div>
              <span>SOLICITAR RESERVA</span>
            </button>
          </li>
        ))}
      </div>
    </div>
  );
}