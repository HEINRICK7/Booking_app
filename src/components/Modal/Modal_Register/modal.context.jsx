import React,{useState} from 'react';

import { message } from 'antd'

import api from '../../../services/api'

import { motion } from 'framer-motion'

import { FiX } from 'react-icons/fi'
import { CgUserlane } from 'react-icons/cg'
import { HiOutlineMail } from 'react-icons/hi'
import { RiLockPasswordLine } from 'react-icons/ri'


import './styles.css'



const ModalRegister = ({setModalOpen}) => {
    const [ name, setName ] = useState('')
    const [ email, setEmail] = useState('')
    const [ password, setPassword ] = useState('')
    const [ status ] = useState('ACTIVE')
    const [ type ] = useState('CLIENT')

   

    const handleRegister = async (e) => {
        e.preventDefault()

        const data = { name, email, password, status, type }
        const key = 'updatable';

            if(!name || !email || !password || !status || !type){

                message.info({ content: 'Preencha todos os campos.', key, duration: 3.5 });
            }else {
                
                try {

                    await api.post('/users', data)
                   
                    message.loading({ content: 'Loading...', key });
                    setTimeout(() => {
                        message.success({ content: 'Usuário cadastrado com sucesso.', key, duration: 3 });
                    }, 1000);

                    setModalOpen(false)

                }catch{

                    message.warning({ content:'Erro, por favor tente novamente...', duration: 3 });
                }
            }    
        
    }

    return (
    <motion.div
        initial={{opacity:0 ,y: 0.1}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y:'50%'}}
    >

    <div className="container_modal_signup_register">
        <button className="button_close_signup" onClick={()=> setModalOpen(false)}>< FiX style={{width: 40, height: 20,fontWeight: 800}}/></button>
        <form onSubmit={handleRegister}>

            <h1>Cadastre-se</h1>
            <h4>Informe seus Dados</h4>
            
            <input 
            className="signup_name_register" 
            type="text" 
            placeholder="seu nome"
            value={name}
            onChange={ e => setName(e.target.value)} 
            />
            <CgUserlane className="icon_name"/>
            
            <input 
            className="signup_email_register" 
            type="text" 
            placeholder="seu email"
            value={email}
            onChange={ e => setEmail(e.target.value)} 
            />
             <HiOutlineMail className="icon_email"/>

            <input 
            className="signup_password_register"
            type="password" 
            placeholder="sua senha" 
            value={password}
            onChange={ e => setPassword(e.target.value)} 
            />
            <RiLockPasswordLine className="icon_password"/>
    
            <button className="signup_button_entrar_register" type="submit">Cadastrar</button>

        </form>
   </div>
    </motion.div>
    )}

export default ModalRegister;