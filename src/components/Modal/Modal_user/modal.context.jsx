import React from 'react';
import { Divider } from 'antd'

import { motion } from 'framer-motion'
import { FiX, FiLogOut } from 'react-icons/fi'

import { logout } from '../../../services/auth'


import './styles.css'



const ModalUser = ({setModalOpen}) => {
const userEmail = localStorage.getItem('userEmail');
return(

    <motion.div
        initial={{opacity:0 ,y: 0.1}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y:'50%'}}
    >

    <div className="container_modal_user">
        <button className="button_close_user" onClick={ ()=> setModalOpen(false)}>< FiX style={{width: 40, height: 20,fontWeight: 800}}/></button>
    <div>
    <Divider />
    <p className="signup_user">{userEmail}</p>

    <Divider />

    <Divider />
    <h6 className="logOut"  onClick={ () => logout(window.location.reload())} ><FiLogOut/> Sair</h6>
    
    
    </div>
    </div>
    </motion.div>
    )
}

export default ModalUser