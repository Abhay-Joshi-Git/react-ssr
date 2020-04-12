import React, { useState, useEffect } from 'react';
import { getHttpClient } from '../http-client';
import { getInitialDataValue } from '../services/initialData';

const fetchAdmins = async () => {
  try {
    const response = await getHttpClient().get('admins');
    return { admins: response.data };
  } catch (e) {
    return { admins: [] };
  }
};

const Admins = ({ admins: adminsData }) => {
  let data = [];
  data = adminsData;
  if (!data) {
    data = getInitialDataValue('admins', []);
  }
  const [admins, setAdmins] = useState(data);
  useEffect(() => {
    fetchAdmins().then((data) => {
      setAdmins(data.admins);
    })
  }, []);

  const renderAdmins = () => {
    return Array.isArray(admins)
    ? admins.map((admin) => (
      <li key={admin.id}>{admin.name}</li>
     ))
    : null;
  }

  return (
    <div>
      list of admins:
      <ul>{renderAdmins()}</ul>
    </div>
  );
}

export default {
  component: Admins,
  fetchData: fetchAdmins
};
