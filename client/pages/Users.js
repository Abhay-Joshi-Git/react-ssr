import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { getHttpClient } from '../http-client';
import { getInitialDataValue } from '../services/initialData';

const fetchUsers = async () => {
  try {
    const response = await getHttpClient().get('users');
    return { users: response.data };
  } catch (e) {
    return { users: [] };
  }
};

const Users = ({ users: usersData }) => {
  let data = [];
  data = usersData;
  if (!data) {
    data = getInitialDataValue('users', []);
  }
  const [users, setUsers] = useState(data);
  useEffect(() => {
    if (!data.length) {
      fetchUsers().then((data) => {
        setUsers(data.users);
      })
    }
  }, []);

  const renderHeaderTags = () => {
    const usersCount = users ? users.length: 0;
    return (
      <Helmet>
        <title>{`Users (${usersCount})`}</title>
        <meta property="og:title" content={`Users ${usersCount}`} />
      </Helmet>
    )
  }

  const renderUsers = () => {
    return Array.isArray(users)
    ? users.map((user) => (
      <li key={user.id}>{user.name}</li>
     ))
    : null;
  }

  return (
    <div>
      {renderHeaderTags()}
      list of users:
      <ul>{renderUsers()}</ul>
    </div>
  );
}

export default {
  component: Users,
  fetchData: fetchUsers
};
