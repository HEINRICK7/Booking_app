import React, {useState} from 'react';

import './styles.css'

import Logo from '../../assets/Calendar_object.svg'

import ModalSignUp from  '../Modal/Modal_Login/index'
import ModalContentSignUp from '../Modal/Modal_Login/modal.context'

import ModalRegister from  '../Modal/Modal_Register/index'
import ModalContentRegister from '../Modal/Modal_Register/modal.context'

const Nav = () => {

    const [ modalOpenSignUp, setModalOpenSignUp] = useState(false)
    const [ modalOpenRegister, setModalOpenRegister] = useState(false)

    return (
        <>  
        <img className="logo" src={Logo} alt="calendar"/>
        <div className= "main_nav" >
            <ul>
                <li>Home</li>
                <li>Destinos</li>
                <li>sobre</li>
                <li><button className="button_nav_login" onClick={() => setModalOpenSignUp(true)}>Login</button></li>
                <li><button className="button_nav_register" onClick={() => setModalOpenRegister(true)}>Registro</button></li>
            </ul>
            
        </div>
        <ModalSignUp modalOpen={modalOpenSignUp}>
            <ModalContentSignUp setModalOpen={ setModalOpenSignUp } />  
        </ModalSignUp> 
        <ModalRegister modalOpen={modalOpenRegister}>
            <ModalContentRegister setModalOpen={ setModalOpenRegister } />  
        </ModalRegister> 
        </>
    );
}

export default Nav;
