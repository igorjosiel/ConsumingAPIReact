import './input.css';
import React, { useState } from 'react';

export default props => {
    const [valor, setValor] = useState('');

    function quandoMudar(e)
    {
        setValor(e.target.value);
    }

    return (
        <div className="input">
            <h2>{valor}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}></div>

            <input value={valor} onChange={quandoMudar}></input>
            <input value={valor} readOnly></input>
            <input value={undefined}></input>
        </div>    
    )
}