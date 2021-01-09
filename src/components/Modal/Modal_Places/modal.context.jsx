import React from 'react';

import { motion } from 'framer-motion'
import { FiX } from 'react-icons/fi'

import './styles.css'
import Bar from '../../../assets/bar.jpg'
import Hoteis from '../../../assets/hoteis.jpg'
import Restaurantes from '../../../assets/restaurantes.jpg'
import Viagens from '../../../assets/viagens.jpg'



const ModalPlaces = ({setModalOpen}) => {

    return (
    <motion.div
        initial={{opacity:0 ,y: 0.1}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y:'50%'}}
    >

    <div className="container_modal_places">
    <button className="button_close_signup" onClick={()=> setModalOpen(false)}>< FiX style={{width: 40, height: 20,fontWeight: 800}}/></button>

    <h1 className="modal_places">Tipos de Reservas</h1>
    <div className="list_places">
       
        <div><img className="list_image" src={Bar} alt="bar"/>
            <p className="list_1">Bares</p>
        </div> 
        <div><img className="list_image" src={Hoteis} alt="hoteis"/>
            <p className="list_3">Hoteis</p>
        </div>
        <div><img className="list_image" src={Restaurantes} alt="restaurantes"/>
            <p className="list_2">Restaurantes</p>
        </div>
       
        <div><img className="list_image" src={Viagens} alt="viagens"/>
            <p className="list_4">Viagens</p>
        </div>
    </div>
   </div>
    </motion.div>
    )}

export default ModalPlaces;