import React, { useState, useEffect } from 'react';
import httpClient from '../http-client';

const fetchUsers = async () => {
  const response = await httpClient.get('users');
  return { users: response.data };
};

const Users = ({ users: usersData }) => {
  const data = usersData || (window.INITIAL_DATA && window.INITIAL_DATA.users) || [];
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
