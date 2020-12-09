import React from 'react';
import { Link } from 'react-router-dom'

import { motion } from 'framer-motion'
import { FiX } from 'react-icons/fi'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from "react-icons/fc"


import './styles.css'


const ModalSignUp = ({setModalOpen}) => (
    <motion.div
        initial={{opacity:0 ,y: 0.1}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y:'50%'}}
    >

    <div className="container_modal_signup">
        <button className="button_close_signup" onClick={ ()=> setModalOpen(false)}>< FiX style={{width: 40, height: 20,fontWeight: 800}}/></button>
        <div>
            <h1>Entrar</h1>
            <h4>Informe email e senha</h4>
            
            <input className="signup_email" type="text" placeholder="email" />
            <input className="signup_password"type="text" placeholder="senha" />

            <button className="signup_button_entrar">Entrar</button>

            <p className="cadastre-se">Ainda não tem uma conta? 
              <Link to='/'>
                Cadastre - se
              </Link></p>
            <p>ou</p>

            <button className="signup_button_facebook"> Continuar com Facebook</button>
            <div className="icon_facebook">
                <FaFacebook />
            </div>
            <button className="signup_button_google">Continuar com Google</button>
            <div className="icon_google">
                <FcGoogle />
            </div>
        </div>
   </div>
    </motion.div>
)

export default ModalSignUp;