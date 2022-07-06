import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllBlogs from './routes/Allblogs/Allblogs';
import Contacts from './routes/Contacts';
import Blog from './components/blog/Blog';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='allblogs' element={<AllBlogs />}/>
        <Route path="allblogs/:blogId" element={<Blog/>} />
        <Route path='contacts' element={<Contacts />} />
        <Route
          path="*"
          element={
            <main style={{backgroundColor:"green"}}>
              <img src={require("./imgs/6342464.jpg")} width={'75%'} height={'75%'} 
              style={{
                position: 'absolute',
                top:'15%',
                margin: '-25px 0 0 -25px',
                left:'15%',
                backgroundColor:'green'
              }}/>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);


reportWebVitals();
