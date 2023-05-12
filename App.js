
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.js';
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
import { useEffect, useState } from 'react';
import Authroute from './ProtectRoute/Authroute';
import { userdetail } from './Api/Authorization/Userdetail';
import { useContext } from 'react';
import { Authuser } from './components/Context/Auth';
import Loading from './Loading/Loading';
import Alert from './Alert/Alert';
import { Alertdata } from './Context/Alertcontext';
import Test from './Alert/Test';
import GroupPage from './GroupPage/Index';
import StationSession from './MyStations/StationSession'
import DSStorageFolder from './Station_Discussion/Pages/DSStorageFolder';
import StationFolder from './Station_Discussion/Pages/StationFolder';
import DirectSessions from './Station_Discussion/Pages/DirectSessions';
import ExternalEmail from './Station_Discussion/Pages/ExternalEmail';
import InternalEmail from './Station_Discussion/Pages/InternalEmail';
import AddVoiceMsg from './Station_Discussion/Pages/AddVoiceMesg';
import AddTextMsg from './Station_Discussion/Pages/AddTextMsg';
import AddSession from './Station_Discussion/Pages/AddSession';
import AddSessionAssociate from './Station_Discussion/Pages/AddSessionAssociate';
import MyStationSession from './Station_Discussion/Pages/MyStationSession'
import StationFiles from './GlobalComponent/StationFiles'
import ShareStation from './GroupPage/Pages/ShareStation';
import StationStatus from './GroupPage/Pages/StationStatus';
import BrowserStation from './GroupPage/Pages/BrowserStation';
import SFStatement from './GroupPage/Pages/SFStatement';
import EditStation from './GroupPage/Pages/EditStaion';
import AssignRoles from './GroupPage/Pages/AssignRoles';
import NewSession from './GroupPage/Pages/NewSession';
import ImageZoom from './GlobalComponent/ImageZoom';
import { DashboardBoard } from './SecurityBoard/DashboardBoard';
import Index from './ProjectTask/Index';
import Associates from './Programs/Associates';
import Directory from './Programs/Directory';
import MyAssociatesMember from './Programs/MyAssociatesMember';
import AddSessionReuse from './GlobalComponent/AddSessionReuse';
import MyInbox from './components/Main-Dashboard/Station/Mail/MyInbox';
import AssociateMessaging from './components/Main-Dashboard/Station/Mail/Pages/AssociateMessaging';
import MyMessage from './components/Main-Dashboard/Station/Mail/Pages/MyMessage';
import DeleteMessage from './components/Main-Dashboard/Station/Mail/Pages/DeleteMessage';
import StationEmail from './components/Main-Dashboard/Station/Mail/Pages/StationEmail';
import ViewEmail from './components/Main-Dashboard/Station/Mail/Pages/ViewEmail';
import AssociateInbox from './components/Main-Dashboard/Station/Mail/AssociateInbox';
import InviteAssociates from './Invite/InviteAssociates';
import NewRegist from './Associate/Registration/NewRegist';
import ProjectBoard from './ProjectBoards/ProjectBoard';
import ArchivedBoard from './ProjectBoards/ArchivedBoard';
import Notifications from './NewUser/Notifications';
import NewIndex from './NewUser/NewIndex';
import ColorSelection from './NewUser/ColorSelection';
import DropdownData from './components/Context/DropdownData';









function App() {
  let{  aalert,setaalert}=useContext(Alertdata)
  let token= getcookie('login')
  const[loading,setloading]=useState(true)
  const{setauser}=useContext(Authuser)
  

  const[user,setuser]=useState(false)
  console.log(user,"app wale hais");

  useEffect(()=>{
    if(token){
      userdetail().then((user)=>{
        console.log(user.User,"femnfuirg");
        setauser(user.User)
        setloading(false)
      })
    }else{
             setloading(false)
    }
  },[])
  if(loading){
    return <Loading/>
  }
  return (
 <div>

    {/* <TextStyle/> */}
   


<DropdownData>

<Header user={user}/>  
 
   <Router>
      <Routes>
      <Route  path="/" element={<Home/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/admin/pages" element={<Authroute><Pages/></Authroute>}/>
        <Route path="/admin/Stations" element={<Authroute><Allgroups/></Authroute>}/>
        <Route path="/admin/pages/add" element={<Authroute><Addpage/></Authroute>}/>
        <Route path="/admin/pages/edit/:id" element={<Authroute><Editpage/></Authroute>}/>
        <Route path="/station" element={<Authroute><Station/></Authroute>}/>
        <Route path="/discussion" element={<Authroute><Discussion/></Authroute>}/>
        <Route path="/discussion/:id" element={ <Authroute><Singlediscuss/></Authroute>}/>
        <Route path="/MyStationDashboard" element={<Authroute><MyStationDashboard/></Authroute>}/>
        <Route path="/Profile" element={<Authroute><Profile/> </Authroute>}/>
        <Route path="/allassociate" element={<AllAssociates/>}/>
        <Route path="/group" element={<GroupPage/>}/>
        <Route path="/all-stations" element={<StationSession/>}/>
        <Route path="/DSStorageFolder" element={<DSStorageFolder/>}/>
        <Route path="/StationFolder" element={<StationFolder/>}/>
        <Route path="/DirectSessions" element={<DirectSessions/>}/>
        <Route path="/ExternalEmail" element={<ExternalEmail/>}/>
        <Route path="/InternalEmail" element={<InternalEmail/>}/>
        <Route path="/AddVoiceMsg" element={<AddVoiceMsg/>}/>
        <Route path="/AddTextMsg" element={<AddTextMsg/>}/>
        <Route path="/AddSession" element={<AddSession/>}/>
        <Route path="/AddSessionAssociate" element={<AddSessionAssociate/>}/>
        <Route path="/MyStationSession" element={<MyStationSession/>}/>
        <Route path="/StationFiles" element={<StationFiles/>}/>    
        <Route path="/ShareStation" element={<ShareStation/>}/>
        <Route path="/StationStatus" element={<StationStatus/>}/>
        <Route path="/BrowserStation" element={<BrowserStation/>}/>
        <Route path="/SFStatement" element={<SFStatement/>}/>
        <Route path="/EditStation" element={<EditStation/>}/>
        <Route path="/AssignRoles" element={<AssignRoles/>}/>
        <Route path="/NewSession" element={<NewSession/>}/>
        <Route path="/ImageZoom" element={<ImageZoom/>}/>
        <Route path="/DashboardBoard" element={<DashboardBoard/>}/>
        <Route path="/Index" element={<Index/>}/>
        <Route path="/associates" element={<Associates/>}/>
        <Route path="/directory" element={<Directory/>}/>
        <Route path="/associatemember" element={<MyAssociatesMember/>}/>
        <Route path="/myinbox" element={<MyInbox/>}/>
        <Route path="/add-message" element={<AssociateMessaging/>}/>
        <Route path="/my-messages" element={<MyMessage/>}/>
        <Route path="/deleted-message" element={<DeleteMessage/>}/>
        <Route path="/station-emails" element={<StationEmail/>}/>
        <Route path="/viewemail" element={<ViewEmail/>}/>
        <Route path="/allformyinbox" element={<AssociateInbox/>}/>
        <Route path="/inviteassociates" element={<InviteAssociates/>}/>
        <Route path="/createwiki" element={<NewRegist/>}/>
        <Route path="/project-boards" element={<ProjectBoard/>}/>
        <Route path="/archived-project-board" element={<ArchivedBoard/>}/>
        <Route path="/notification" element={<Notifications/>}/>
        <Route path="/add-new-user" element={<NewIndex/>}/>
        <Route path="/colorselection" element={<ColorSelection/>}/>
        {/* <Route path="/Sendboard" element={<Sendboard/>}/> */}
       
     
        <Route path="/login" element={<Login setuser={setuser}/>}/>        
      </Routes>
    </Router>

  </DropdownData>
 
 </div>
  );
}

export default App;
