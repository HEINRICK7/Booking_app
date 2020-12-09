import React from 'react'
import { Avatar } from 'antd'
import { AiOutlineUser } from 'react-icons/ai'

import './styles.css'

const SessionUser = () => {
    return(
        <div className="icon_user">
            <Avatar className="icon" size={50} icon={<AiOutlineUser style={{fontSize: 25}}/>} />
            <h3>Carlos Henrique</h3>
        </div>
    )

}

export default SessionUser