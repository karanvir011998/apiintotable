// import logo from './logo.svg';
import './App.css';
import axios from "axios"
import { useState } from 'react';
// import { useEffect } from 'react';
import styled from "styled-components"
import {useNavigate} from "react-router-dom";

function App() {
  const navigate= useNavigate();
  const [data,setData] = useState([]);
  const [show,showData] = useState(false);

  const details = (e) =>{
    const a = data.filter((posts)=>{
      return posts.id === e;
    })
    navigate("/dashboard", {state:{a}});
    console.log(a);
  }
  const Div = styled.div`
  table{
    margin-top: 5vh;
  }
  .thead{
    padding-top: 14px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #04AA6D;
    color: white;
  }

  table, th, td {
    text-transform: capitalize;
    border: 1px solid white;
    border-collapse: collapse;
}
th, td {
    background-color: #96D4D4;
}
`
const Button = styled.button`
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  /* transition-duration: 0.4s; */
  cursor: pointer;
  border-radius: 8px;

  :hover{
    background-image: linear-gradient(red, yellow, blue);
  }
background-color:green;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);`
const click = async () =>{
    try{
const res = await axios.get("https://jsonplaceholder.typicode.com/posts",
);
setData(res.data)
console.log(res.data)
showData(true)
}
    catch(err){
      console.log(err)
    }  
  }
  return (
    <div className="App">
      <h2>API Data</h2>
  {show?<Div className='tablediv'>
      <table>
          <tr>
    <th className='thead'>id</th>
    <th className='thead'>title</th>
    <th className='thead'>Body</th>
    <th className='thead'>Details</th>
  </tr>
      {data.map((posts)=>{
      const{title ,id , body} = posts;
      return(
        <tr key={id}>       
    <td>{id}</td>
    <td>{title}</td>
    <td>{body}</td>
    <td><Button onClick={()=>details(id)}>Details</Button></td>
        </tr>
      )})
    }
        </table>
    </Div>
    :null}
<Button type="submit" onClick={click}>Show Data</Button>
    </div>
  );
}

export default App;
