import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios';

function App() {

  const http = axios.create({
    baseURL: "http://localhost/Hospital/backend/public",
    headers: {
      "X-Requested-With" : "XMLHttpRequest",
      "Content-Type" : "application/json"
    },
    withCredentials: true
  });


  const [user, setUser] = useState({});


  useEffect( () => {
      getUser().then(res => {
        setUser(res.data)
      });
  },[]);

  async function getUser() {
     const csrf = await http.get("sanctum/csrf-cookie");

    await http.post("/api/login", {"email" : "ahmed@email.com","password" : "123456"})
     
     console.log(
      csrf
     );

     
     return await http.get('api/user')
  }


  return (
    <div className="App">
      <h1>Hospital</h1>
      <h2>{user.name}</h2>
      <h2>{user.email}</h2>
    </div>
  )
}

export default App
