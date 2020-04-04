import React, { useState, useEffect } from 'react';
import { getHttpClient } from '../http-client';

const fetchUsers = async () => {
  try {
    const response = await getHttpClient().get('users');
    return { users: response.data };
  } catch (e) {
    return { users: [] };
  }
};

const Users = ({ values }) => {
  let data = [];
  const usersData = values[0] ? values[0].users: null;
  data = usersData || ((window && window.INITIAL_DATA) ? window.INITIAL_DATA.users: []) || [];
  const [users, setUsers] = useState(data);
  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data.users);
    })
  }, []);

  const renderUsers = () => {
    return Array.isArray(users)
    ? users.map((user) => (
      <li key={user.id}>{user.name}</li>
     ))
    : null;
  }

  return (
    <div>
      list of users:
      <ul>{renderUsers()}</ul>
    </div>
  );
}

export default {
  component: Users,
  fetchData: fetchUsers
};
