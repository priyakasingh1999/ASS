
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import Header from './components/navbar/Header';
import { Admin } from './components/Admin/Admin';
import Station from './components/Station-admin/Station';
import MyStationDashboard from './components/Main-Dashboard/Station/MyStationDashboard';
import Profile from './components/AssociatesProfile/Profile';
import Login from './components/Authorization/Login';
import Cookies from 'js-cookie';
import Pages from './components/Pages/Pages';
import { Addpage } from './components/Pages/Addpage';
import { Editpage } from './components/Pages/Editpage';
import{Allgroups }from './Station/Allgroups';
import Discussion from './Station_Discussion/Discussion';
import Singlediscuss from './Station_Discussion/Singlediscuss';
import AllAssociates from './Associate/AllAssociates';
import Count from './components/Context/Count';
import { Checking } from './components/Testing/Checking';
import Discussrecent from './Station_Discussion/Discussrecent';
import { Searchd } from './Station_Discussion/Searchd';
import { getcookie } from './Helper/cookie';
import Home from './Home/Home';
import { useState } from 'react';
import GroupPage from './components/GroupPage/Index';




function App() {
  

  const[user,setuser]=useState(false)
  console.log(user,"app wale hais");
  
  return (
 <div>

    {/* <TextStyle/> */}
   <Header user={user}/>  
 
 
    <Router>
      <Routes>
      <Route  path="/" element={<Home/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/admin/pages" element={<Pages/>}/>
        <Route path="/admin/Stations" element={<Allgroups/>}/>
        <Route path="/admin/pages/add" element={<Addpage/>}/>
        <Route path="/admin/pages/edit/:id" element={<Editpage/>}/>
        <Route path="/station" element={<Station/>}/>
        <Route path="/discussion" element={<Discussion/>}/>
        <Route path="/discussion/:id" element={<Singlediscuss/>}/>
        <Route path="/MyStationDashboard" element={<MyStationDashboard/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Associate" element={<AllAssociates/>}/>
        <Route path="/GroupPage" element={<GroupPage/>}/>     
        <Route path="/login" element={<Login setuser={setuser}/>}/>        
      </Routes>
    </Router>
 </div>
  );
}

export default App;
