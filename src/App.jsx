import React, { useState } from 'react';
import './App.css';
import Table from './table';
import { Users } from './users'; // Assuming Users is an array of user objects

function App() {
  const [query, setQuery] = useState("");

  const search = (data) => {
    const searchTerm = query.toLowerCase(); // Convert query to lowercase for case-insensitive search
    return data.filter((user) =>
      // Check if any of the keys (name, surname, email) match the search term
      Object.values(user).some((value) =>
        typeof value === 'string' && value.toLowerCase().includes(searchTerm)
      )
    );
  };

  return (
    <div className="app">
      <input
        type="text"
        placeholder='Search..'
        className='search'
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table data={search(Users)} />
   
 
  

{/*       <ul className='list'>
        {Users.filter((user) =>
          user.first_name.toLowerCase().includes(query)
        ).map((user) => (
          <li key={user.id} className='listItem'>
            {user.first_name}  
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;