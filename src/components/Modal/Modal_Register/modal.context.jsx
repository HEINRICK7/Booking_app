import React,{useState} from 'react';
//import { Link } from 'react-router-dom'
import { message } from 'antd'

import axios from 'axios'

import { motion } from 'framer-motion'
import { FiX } from 'react-icons/fi'

import './styles.css'


const ModalRegister = ({setModalOpen}) => {
    
    const [ name, setName ] = useState('')
    const [ email, setEmail] = useState('')
    const [ user, setUser ] = useState('')
    const [ status ] = useState('ACTIVE')
    const [ type ] = useState('CLIENT')

    const handleRegister = async (e) => {
        e.preventDefault()

        const data = { name, email, user, status, type }
        const key = 'updatable';

            if(name !== '' && email !== '' && user !== '' && status !== '' && type !== ''){
                try {
                    const response = await axios.post('http://localhost:8080/booking/v1/user', data)
                    console.log(response.data)
                    console.log(response.statusText)
                    if(response.status === 201){

                        message.info({ content: 'Usuário cadastrado com esse email no banco de dados, tente com outro email.', key, duration: 2 })
                    }
                    else{
                        message.loading({ content: 'Loading...', key });
                        setTimeout(() => {
                            message.success({ content: 'Usuário cadastrado com sucesso.', key, duration: 3 });
                        }, 1000);

                     }   

                }catch{
                    message.warning({ content:'Erro, por favor tente novamente...', duration: 3 });
                }

            }else {
                message.info({ content: 'Preencha todos os campos.', key, duration: 3.5 });
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
            className="signup_nome_register" 
            type="text" 
            placeholder="seu nome"
            value={name}
            onChange={ e => setName(e.target.value)} 
            />
            <input 
            className="signup_email_register" 
            type="text" 
            placeholder="seu email"
            value={email}
            onChange={ e => setEmail(e.target.value)} 
            
            />
            <input 
            className="signup_password_register"
            type="password" 
            placeholder="sua senha" 
            value={user}
            onChange={ e => setUser(e.target.value)} 
            
            />
    
            <button className="signup_button_entrar_register" type="submit">Cadastrar</button>

        </form>
   </div>
    </motion.div>
    )}

export default ModalRegister;