import React, {useState} from 'react';
import Header from './Header'
import MainContent from './MainContent'
import greyReact from '../grey-react.png'

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleMode = () => setDarkMode(prevState => !prevState)
  return(
    <div>
        <Header darkMode={darkMode} toggleMode={toggleMode}/>
        <MainContent darkMode={darkMode}/>
        <img src={greyReact} className="greyReact"/>
    </div>
  )
}