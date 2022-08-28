import logo from '../logo.svg';
import '../Css/Header.css'
import React from 'react';

export default function Header(props) {
    const navStyle = {
        backgroundColor : props.darkMode ? 'rgb(23, 23, 23)' : '#fff', 
        boxShadow : '2px 2px 9px #000'
    }
    const lightSlahDarkLabels = {
        color : props.darkMode ? '#fff' : 'rgb(134, 134, 134)'
    }
    return (
        <nav style={navStyle}>
            <div className='leftHeader'>
                <img src={logo} className="logo"></img>
                <h1 className="reactFacts">ReactFacts</h1>
            </div>

            <div className='rightHeader'>
                <p style={lightSlahDarkLabels}>Light</p>
                <label className="switch">
                    <input onClick={props.toggleMode} type="checkbox"/>
                    <span className="slider round"></span>
                </label>
                <p style={lightSlahDarkLabels}>Dark</p>
            </div>
            
        </nav>
    )
}