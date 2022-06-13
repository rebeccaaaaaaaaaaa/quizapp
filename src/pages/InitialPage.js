import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import style from "../styles/initialPage.module.css";

function InitialPage() {
  return (
    <div className={style.content}>
      <div className={style.wellcomeSection}>
          <img src={Logo} alt="logo" className={style.logo} width="150" />
          <h1 style={{ marginBottom: "20px" }}>
            O quanto você conhece sobre <br /> League of Legends?
          </h1>
          <Link to="/quiz">Iniciar teste</Link>
      </div>
    </div>
  );
}

export default InitialPage;
