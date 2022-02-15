import "./header.css";
import React from "react";

export default function Header({handleShowFilterForm}) {
  return (
    <div className="header">
      <div className="header__left">
        <h1 className="header__title">Bored-Board</h1>
      </div>
      <div className="header__right">
        <button className="btn filter-btn" onClick={() => handleShowFilterForm(true)}>
          <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/32/ffffff/external-filter-interface-kiranshastry-lineal-kiranshastry-1.png" />
        </button>
        {/* Icon sourced via https://icons8.com/icon/XKppWs6hAZkc/filter*/}
      </div>
    </div>
  );
}
