import React from 'react';
import './configLink.css';

export default props => (
    <nav className='navbar navbar-inverse bg-inverse'>
        <div className='container'>
            <div className='navbar-header'>
                <a className='navbar-brand' href='#'>
                    <i className='fa fa-calendar-check-o'></i> TodoApp
                </a>
            </div>

            <div id='navbar' className='navbar-collapse collapse'>
                <ul className='navbar-nav'>
                    <li><a className='configLink' href='#/todos'>Tarefas</a></li>
                    <li><a className='configLink' href='#/about'>Sobre</a></li>
                </ul>
            </div>
        </div>
    </nav>
)