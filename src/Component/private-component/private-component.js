import React from 'react'
import { Outlet } from 'react-router-dom';

const PrivateComponent = () => {
  const auth = localStorage.getItem('user');
  return auth ? <Outlet /> : <navigate to='/signup' />
}

export default PrivateComponent;