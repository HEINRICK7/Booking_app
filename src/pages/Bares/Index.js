import React from 'react';
import Logo from '../../assets/Calendar_object.svg'
import { BiDrink } from 'react-icons/bi'
import { GoLocation } from 'react-icons/go'

import { Divider, DatePicker, Space, TimePicker, InputNumber } from 'antd';
import moment from 'moment'

import './styles.css'

const Bares = () => {

    const format = 'HH-mm';
    const size = 50;
    

    function onChangeData(date, dateString) {
        console.log(date, dateString);
      }

      function onChangeTime(time, timeString) {
        console.log(time, timeString);
      }  
      
      function onChangeNumber(value) {
        console.log('changed', value);
      }
    return (
        <>
        <img className="logo" src={Logo} alt="calendar"/>
        <p className="text_logo">Explore Reservas</p>   
        <div className="pesquiza">
            
            <input placeholder="Bares"/>
            <BiDrink className="icon_bares"/>
            <input placeholder="Digite a Cidade"/>
            <GoLocation className="icon_location"/>
            <button className="busca">Busca</button>
        </div>
        <Divider />
        <div className="data_hora">
            <Space size={size} className="dataPicker" direction="horizontal">
        
                <DatePicker  placeholder="Data da reserva" onChange={onChangeData} style={{ width: '120%', height: 50 }} />
                <TimePicker  placeholder="Horário da reserva"  style={{ width: '120%', height: 50 }} onChange={onChangeTime} defaultOpenValue={moment('00:00', 'HH:mm', format)} format={format} />
                <InputNumber placeholder="Pessoas" min={1} max={100} style={{ width: '50%', height: 50, padding: 10 }} defaultValue={0} onChange={onChangeNumber} />
                
            </Space>
        </div>
        </>
    );
}

export default Bares;