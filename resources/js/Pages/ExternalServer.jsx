import React, { useState, useEffect } from 'react';

function ExternalServer(props) {
  const [users, setUsers] = useState([...props.users]);

  useEffect(() => {
    
  }, []);

  return (
    <div className="App">
      <h1>Daftar Pengguna</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.username})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExternalServer;