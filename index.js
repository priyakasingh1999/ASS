import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import StationProvider from './components/Context/Stationform';
import  SessionProvider from './components/Context/Session';
import reportWebVitals from './reportWebVitals';
import Iconprovider from './components/Context/Sideicon';
import Count from './components/Context/Count';
import Discussionapi from './components/Context/Discussionapi';
import Auth from './components/Context/Auth';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<div>
    <Auth>
    <Discussionapi>
<Count>
   <Iconprovider>
    <StationProvider>
    <SessionProvider>
    <App />
    </SessionProvider>
    </StationProvider>
    </Iconprovider>
    </Count>
    </Discussionapi>
    </Auth>
</div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
