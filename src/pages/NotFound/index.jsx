import React from 'react';
import { Link } from 'react-router-dom'

import { BsArrowLeft } from 'react-icons/bs'

import NotFoundImg from '../../assets/notfound.svg'

import './styles.css'

const NotFound= () => {

    return (
        <>
            <Link to="/">
               <button className="button_back" >Voltar</button>
               <BsArrowLeft className="button_back_icon"/>
            </Link>
            <img className="notFoundImg" src={NotFoundImg} alt="image_booking"/>
            <h1>Not Found</h1>
        </>
        
    );
}

export default NotFound;
