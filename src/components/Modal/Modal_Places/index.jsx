import React from 'react';
import { createPortal } from 'react-dom'
import './styles.css'


const ModalPlaces = ({modalOpen, children}) => {
  if (!modalOpen) return null

  return createPortal(
    
    <div className="Wrapper">
      <div className="container_modal">
        <div>{children}</div>
      </div>
    </div>,
    document.body
   
  )
}

export default ModalPlaces