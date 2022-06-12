import React from 'react'
import { Link } from "react-router-dom";
import style from '../styles/initialPage.module.css'

function InitialPage() {
  return (
    <div className={style.bgRed}>

        <Link to="/quiz">Iniciar jogo</Link>
    </div>
  )
}

export default InitialPage