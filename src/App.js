import './App.css'
import React from 'react'
import { Link as NavLink, Outlet } from "react-router-dom"

function App() {
  return (
    <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1.2rem",
          height:'2.8rem',
          backgroundColor: "Black"
        }}>
        <div className='NavLink'>
          {/* <NavLink to='/' > <img src={require("./imgs/ias.jpg")} width={'80px'}></img></NavLink> */}
          <NavLink to='/contacts' className='Link'>Contacts</NavLink>
          <NavLink to='/about' className='Link'>About IAS</NavLink>| 
          <NavLink to='/allblogs' className='Link'>All Blogs</NavLink>| 
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
