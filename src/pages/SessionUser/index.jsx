import React, {useState} from 'react'
import { Avatar } from 'antd'
import { AiOutlineUser } from 'react-icons/ai'

import './styles.css'

import ModalPlaces from  '../../components/Modal/Modal_user/index'
import ModalContentPlaces from '../../components/Modal/Modal_user/modal.context'

const SessionUser = () => {
    const userName = localStorage.getItem('userName');

    const [ modalOpenPlaces, setModalOpenPlaces] = useState(false)

    return(
        <>
            <div className="icon_user">
                <Avatar className="icon" size={50} icon={<AiOutlineUser style={{fontSize: 25}}/>} onClick={() => setModalOpenPlaces(true)} />
                <h3>{userName}</h3>
            </div>

            <ModalPlaces modalOpen={modalOpenPlaces}>
            <ModalContentPlaces setModalOpen={ setModalOpenPlaces } />  
        </ModalPlaces> 
        </>
    )

}

export default SessionUser