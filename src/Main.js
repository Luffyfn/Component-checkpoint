import React from 'react';
import './Main.css';
import ProfilPhoto from './profil/ProfilPhoto';
import FullName from './profil/FullName';
import Address from './profil/Address';

function Main() {
    return(
        <div className="container">
            <h1>MY PROFILE</h1>
            <ProfilPhoto /> 
            <FullName />  
            <Address />     
        </div>
    );
}

export default Main;