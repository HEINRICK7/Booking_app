import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/index'

import ImagnsBooking from '../../assets/imageCalendar.svg'

import ModalPlaces from  '../../components/Modal/Modal_Places/index'
import ModalContentPlaces from '../../components/Modal/Modal_Places/modal.context'

import './styles.css'

const Home = () => {

    const [ modalOpenPlaces, setModalOpenPlaces] = useState(false)

    return (
        <>
        <div>
            < Nav />
        </div>
        <p className="text_main">Explore Reservas</p>
        <h5>Pesquise centenas de lugares de uma só vez e encontre Restaurantes, Hotéis, Bares para você fazer sua reserva na comodidade de sua casa.</h5>
        <button className="button_home" onClick={() => setModalOpenPlaces(true)}>Tipos de Reservas</button>
        <img className="main_image" src={ImagnsBooking} alt="booking"/>


        <ModalPlaces modalOpen={modalOpenPlaces}>
            <ModalContentPlaces setModalOpen={ setModalOpenPlaces } />  
        </ModalPlaces> 
        </>
        
    );
}

export default Home;
