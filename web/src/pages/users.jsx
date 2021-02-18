import React from 'react';
import { useParams } from 'react-router-dom';
import DefaultLayout from '../layouts/default';
export default function Users() {
  const { id } = useParams();

  return (
    <DefaultLayout>
      <h2>User ID : {id}</h2>
    </DefaultLayout>
  )
}
