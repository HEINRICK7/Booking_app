import React from 'react';
import { createPortal } from 'react-dom'
import './styles.css'


const Modal = ({modalOpen, children}) => {
  if (!modalOpen) return null

  return createPortal(
    
    <div className="Wrapper_user">
      <div className="container_modal">
        <div>{children}</div>
      </div>
    </div>,
    document.body
   
  )
}

export default Modal