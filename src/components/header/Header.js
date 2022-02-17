import "./header.css";
import React, {useState} from "react";

export default function Header({handleShowFilterForm, handleShowPinnedActivities}) {
  const [filterBtnStatus, setFilterBtnStatus] = useState("btn")
  const [pinnedBtnStatus, setPinnedBtnStatus] = useState("btn")


  return (
    <div className="header">
      <div className="header__left">
        <h1 className="header__title">Bored-Board</h1>
      </div>
      <div className="header__right">
        <button className={pinnedBtnStatus} onClick={() => {handleShowPinnedActivities(); pinnedBtnStatus === 'btn'?setPinnedBtnStatus("btn pin-btn-active"):setPinnedBtnStatus('btn')}}>
        <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/30/ffffff/external-pin-map-pin-flatart-icons-outline-flatarticons.png" alt="PIN"/>
        </button>
        <button className={filterBtnStatus} onClick={() => {handleShowFilterForm(); filterBtnStatus === 'btn' ? setFilterBtnStatus('btn filter-btn-active'): setFilterBtnStatus('btn')}}>
          <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/32/ffffff/external-filter-interface-kiranshastry-lineal-kiranshastry-1.png" alt="FILTER"/>
        </button>
        {/* Icon sourced via https://icons8.com/icon/XKppWs6hAZkc/filter*/}
      </div>
    </div>
  );
}
